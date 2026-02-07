"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Download, List, BarChart, Settings, ChevronDown } from "lucide-react";
import type { User } from "./table/columns";

type Props = {
  users: User[];
};

type ExportFormat = "csv" | "xlsx" | "pdf";

export const QuickActions: React.FC<Props> = ({ users }) => {
  const [showExportMenu, setShowExportMenu] = useState(false);

  const getDateString = () => new Date().toISOString().slice(0, 10);

  const downloadFile = (blob: Blob, filename: string) => {
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = filename;
    a.click();
    URL.revokeObjectURL(url);
  };

  const exportAsCSV = (data: User[]) => {
    const headers = ["ID", "Name", "Email", "Joined Date", "Interest"];
    
    const escape = (val: unknown) => {
      const s = String(val ?? "");
      const escaped = s.replace(/"/g, '""');
      return /[",\n]/.test(s) ? `"${escaped}"` : escaped;
    };

    const rows = [headers.join(",")];
    for (const u of data) {
      rows.push([
        escape(u.id),
        escape(u.name),
        escape(u.email),
        escape(u.joinedDate),
        escape(u.interest),
      ].join(","));
    }


    // csv here
    const csv = rows.join("\n");
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    downloadFile(blob, `Mikaelson-Initiative-Waitlist-${getDateString()}.csv`);
  };

  // excel spreadsheet here
  const exportAsXLSX = (data: User[]) => {
    import('xlsx').then((XLSX) => {
      const worksheet = XLSX.utils.json_to_sheet(data);
      const workbook = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(workbook, worksheet, "Users");
      XLSX.writeFile(workbook, `Mikaelson-Initiative-Waitlist-${getDateString()}.xlsx`);
    });
  };

  // pdf here
  const exportAsPDF = (data: User[]) => {
  Promise.all([
    import('jspdf'),
    import('jspdf-autotable')
  ]).then(([jsPDFModule, autoTableModule]) => {
    const { jsPDF } = jsPDFModule;
    const autoTable = autoTableModule.default;
    
    const doc = new jsPDF();

    // Add title
    doc.setFontSize(18);
    doc.text("User Data Export", 14, 20);
    
    // Add date
    doc.setFontSize(10);
    doc.text(`Generated: ${new Date().toLocaleDateString()}`, 14, 28);

    // Table headers
    const headers = [["ID", "Name", "Email", "Joined Date", "Interest"]];
    
    // Table data
    const tableData = data.map(u => [
      u.id,
      u.name,
      u.email,
      u.joinedDate,
      u.interest
    ]);

    // Generate table using the imported autoTable function
    autoTable(doc, {
      head: headers,
      body: tableData,
      startY: 35,
      theme: 'grid',
      headStyles: {
        fillColor: [41, 128, 185],
        textColor: 255,
        fontStyle: 'bold'
      },
      styles: {
        fontSize: 9,
        cellPadding: 3
      },
      alternateRowStyles: {
        fillColor: [245, 245, 245]
      }
    });

    doc.save(`Mikaelson-Initiative-Waitlist-${getDateString()}.pdf`);
  });
};


  const exportData = (format: ExportFormat) => {
    switch (format) {
      case "csv":
        exportAsCSV(users);
        break;
      case "xlsx":
        exportAsXLSX(users);
        break;
      case "pdf":
        exportAsPDF(users);
        break;
    }
  };

  return (
    <section className="max-w-6xl mx-auto bg-white mt-10 p-5 rounded-md dark:bg-black/60 dark:text-white">
      <h2 className="text-xl font-bold mb-4 text-center">Quick Actions</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">

        {/* drop down for export data */}
        <div className="relative">
          <button
            onClick={() => setShowExportMenu(!showExportMenu)}
            className="flex w-full items-center justify-start gap-2 px-4 py-3 bg-brand-primary-300 border-brand-primary border-2 dark:bg-black text-black rounded-md hover:bg-brand-primary transition dark:text-white"
          >
            <Download size={16} />
            <span>Export Data</span>
            <ChevronDown size={16} className="ml-auto" />
          </button>

          {/* menu */}
          {showExportMenu && (
            <div className="absolute top-full mt-1 w-full bg-white dark:bg-gray-800 border-2 border-brand-primary rounded-md shadow-lg z-10">
              <button
                onClick={() => {
                  exportData("csv");
                  setShowExportMenu(false);
                }}
                className="w-full px-4 py-2 text-left hover:bg-brand-primary-300 dark:hover:bg-gray-700 transition rounded-t-md"
              >
                CSV Format
              </button>
              <button
                onClick={() => {
                  exportData("xlsx");
                  setShowExportMenu(false);
                }}
                className="w-full px-4 py-2 text-left hover:bg-brand-primary-300 dark:hover:bg-gray-700 transition"
              >
                Excel Format
              </button>
              <button
                onClick={() => {
                  exportData("pdf");
                  setShowExportMenu(false);
                }}
                className="w-full px-4 py-2 text-left hover:bg-brand-primary-300 dark:hover:bg-gray-700 transition rounded-b-md"
              >
                PDF Format
              </button>
            </div>
          )}
        </div>

        {/* View Waitlist */}
        <Link
          href="/admin/waitlist"
          className="flex w-full border-2 items-center dark:bg-black justify-start gap-2 px-4 py-3 bg-brand-primary-300 border-brand-primary text-black rounded-md hover:bg-brand-primary transition dark:text-white"
        >
          <List size={16} />
          <span>View Waitlist</span>
        </Link>

        {/* Analytics */}
        <Link 
          href={"/admin/analytics"} 
          className="flex w-full border-2 dark:bg-black items-center justify-start gap-2 px-4 py-3 bg-brand-primary-300 border-brand-primary text-black rounded-md hover:bg-brand-primary transition dark:text-white"
        >
          <BarChart size={16} />
          <span>Analytics</span>
        </Link>

        {/* Settings */}
        <Link 
          href={"/admin/settings"} 
          className="flex w-full border-2 dark:bg-black items-center justify-start gap-2 px-4 py-3 bg-brand-primary-300 border-brand-primary text-black rounded-md hover:bg-brand-primary transition dark:text-white"
        >
          <Settings size={16} />
          <span>Settings</span>
        </Link>
      </div>
    </section>
  );
};