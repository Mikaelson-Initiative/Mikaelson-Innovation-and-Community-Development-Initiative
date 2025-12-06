"use client"

import React, { useMemo, useState } from 'react'
import { Search as SearchIcon, Eye, X, Mail, Download, Trash2, Check } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from '@/components/ui/pagination'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
import { Router } from 'next/router'

// Sample data; replace with real data source when available
type WaitlistEntry = {
    id: string
    name: string
    email: string
    interest: 'habits' | 'community' | 'challenges' | 'analytics' | 'all'
    referral?: string
    newsletter: boolean
    joined: string
    status: 'pending' | 'contacted' | 'invited'
}
// sampleData moved to page-level state

type WaitlistTableProps = {
    entries: WaitlistEntry[]
    setEntries: React.Dispatch<React.SetStateAction<WaitlistEntry[]>>
}
const WaitlistTable: React.FC<WaitlistTableProps> = ({ entries, setEntries }) => {
    const [searchQuery, setSearchQuery] = useState('')
    const [interest, setInterest] = useState<string>('')
    const [status, setStatus] = useState<string>('')
    const [selected, setSelected] = useState<Set<string>>(new Set())
    const [page, setPage] = useState(1)
    const pageSize = 8
    const [viewOpen, setViewOpen] = useState(false)
    const [viewEntry, setViewEntry] = useState<WaitlistEntry | null>(null)
    const [confirmOpen, setConfirmOpen] = useState(false)
    const [confirmTarget, setConfirmTarget] = useState<{ type: 'bulk' | 'single'; id?: string } | null>(null)

    const filtered = useMemo(() => {
        const q = searchQuery.toLowerCase()
        return entries.filter((e) => {
            const matchesQuery = !q || e.name.toLowerCase().includes(q) || e.email.toLowerCase().includes(q)
            const matchesInterest = !interest || interest === 'all' || e.interest === interest
            const matchesStatus = !status || e.status === status
            return matchesQuery && matchesInterest && matchesStatus
        })
    }, [searchQuery, interest, status, entries])

    const totalPages = Math.max(1, Math.ceil(filtered.length / pageSize))
    const currentPage = Math.min(page, totalPages)
    const startIdx = (currentPage - 1) * pageSize
    const pageData = filtered.slice(startIdx, startIdx + pageSize)

    const toggleRow = (id: string) => {
        setSelected((prev) => {
            const next = new Set(prev)
            if (next.has(id)) next.delete(id)
            else next.add(id)
            return next
        })
    }

    const toggleAllOnPage = (checked: boolean) => {
        setSelected((prev) => {
            const next = new Set(prev)
            pageData.forEach((e) => {
                if (checked) next.add(e.id)
                else next.delete(e.id)
            })
            return next
        })
    }

    const bulkEmail = () => {
        console.log('Bulk email IDs:', Array.from(selected))
    }
    const bulkExport = () => {
        // Generate CSV for selected entries
        const headers = ['id','name','email','interest','referral','newsletter','joined','status']
        const selectedEntries = entries.filter((e) => selected.has(e.id))
        const escape = (val: unknown) => {
          const s = String(val ?? '')
          // escape quotes and wrap in quotes if contains comma or newline
          const escaped = s.replace(/"/g, '""')
          return /[",\n]/.test(s) ? `"${escaped}"` : escaped
        }
        const rows = [headers.join(',')]
        for (const e of selectedEntries) {
          rows.push([
            escape(e.id),
            escape(e.name),
            escape(e.email),
            escape(e.interest),
            escape(e.referral ?? ''),
            escape(e.newsletter ? 'yes' : 'no'),
            escape(e.joined),
            escape(e.status),
          ].join(','))
        }
        const csv = rows.join('\n')
        const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' })
        const url = URL.createObjectURL(blob)
        const a = document.createElement('a')
        a.href = url
        a.download = `waitlist-selected-${new Date().toISOString().slice(0,10)}.csv`
        a.click()
        URL.revokeObjectURL(url)
    }
    const bulkDelete = () => {
        setConfirmTarget({ type: 'bulk' })
        setConfirmOpen(true)
    }

    const performDelete = () => {
        if (!confirmTarget) return
        if (confirmTarget.type === 'bulk') {
            setEntries((prev) => prev.filter((e) => !selected.has(e.id)))
            setSelected(new Set())
        } else if (confirmTarget.type === 'single' && confirmTarget.id) {
            const id = confirmTarget.id
            setEntries((prev) => prev.filter((x) => x.id !== id))
            setSelected((prev) => {
                const next = new Set(prev)
                next.delete(id)
                return next
            })
        }
        setConfirmOpen(false)
        setConfirmTarget(null)
    }

    const clearFilters = () => {
        setSearchQuery('')
        setInterest('')
        setStatus('')
        setSelected(new Set())
        setPage(1)
    }

    return (
        <div className="space-y-6 mt-6">
            {/* Search and filters */}
            <div className="bg-white dark:bg-neutral-900 border dark:border-neutral-800 rounded-lg p-6 flex gap-4 flex-wrap items-center shadow-sm">
                <div className="flex-1 min-w-[280px] relative">
                    <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
                    <Input
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder="Search by name or email..."
                        className="pl-9"
                    />
                </div>

                <div className="flex items-center gap-3 flex-wrap">
                    <Select value={interest} onValueChange={setInterest}>
                        <SelectTrigger>
                            <SelectValue placeholder="All Interests" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="habits">Habit Tracking</SelectItem>
                            <SelectItem value="community">Community Features</SelectItem>
                            <SelectItem value="challenges">Challenges & Competitions</SelectItem>
                            <SelectItem value="analytics">Personal Analytics</SelectItem>
                            <SelectItem value="all">Everything</SelectItem>
                        </SelectContent>
                    </Select>

                    <Select value={status} onValueChange={setStatus}>
                        <SelectTrigger>
                            <SelectValue placeholder="All Status" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="pending">Pending</SelectItem>
                            <SelectItem value="contacted">Contacted</SelectItem>
                            <SelectItem value="invited">Invited</SelectItem>
                        </SelectContent>
                    </Select>

                    <Button variant="outline" onClick={clearFilters} className="gap-2">
                        <X className="size-4" />
                        Clear
                    </Button>
                </div>
            </div>

            {/* Bulk actions removed per request */}
            {selected.size > 0 && (
                <div className="bg-white dark:bg-neutral-900 border dark:border-neutral-800 rounded-lg p-4 flex items-center justify-between shadow-sm">
                    <div className="text-sm text-muted-foreground">
                        <span className="font-medium text-foreground">{selected.size}</span> selected
                    </div>
                    <div className="flex gap-2">
                        <Button variant="outline" className="gap-2" onClick={bulkEmail}><Mail className="size-4" /> Email Selected</Button>
                        <Button variant="outline" className="gap-2" onClick={bulkExport}><Download className="size-4" /> Export Selected</Button>
                        <Button variant="destructive" className="gap-2" onClick={bulkDelete}><Trash2 className="size-4" /> Delete Selected</Button>
                    </div>
                </div>
            )}

            {/* Table */}
            <div className="rounded-lg overflow-hidden border dark:border-neutral-800 bg-white dark:bg-neutral-900">
                <Table className="text-sm">
                    <TableHeader>
                        <TableRow className="bg-muted/40">
                            <TableHead className="p-4">
                                <Checkbox
                                    checked={pageData.length > 0 && pageData.every((e) => selected.has(e.id))}
                                    onCheckedChange={(val) => toggleAllOnPage(Boolean(val))}
                                    aria-label="Select all"
                                />
                            </TableHead>
                            <TableHead>Name</TableHead>
                            <TableHead>Email</TableHead>
                            <TableHead>Interest</TableHead>
                            <TableHead>Referral</TableHead>
                            <TableHead>Newsletter</TableHead>
                            <TableHead>Joined</TableHead>
                            <TableHead>Status</TableHead>
                            <TableHead>Actions</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {pageData.length === 0 ? (
                            <TableRow>
                                <TableCell colSpan={9} className="text-center py-8">No results.</TableCell>
                            </TableRow>
                        ) : (
                            pageData.map((e) => (
                                <TableRow key={e.id} data-state={selected.has(e.id) ? 'selected' : undefined}>
                                    <TableCell>
                                        <Checkbox
                                            checked={selected.has(e.id)}
                                            onCheckedChange={() => toggleRow(e.id)}
                                            aria-label={`Select ${e.name}`}
                                        />
                                    </TableCell>
                                    <TableCell>{e.name}</TableCell>
                                    <TableCell>{e.email}</TableCell>
                                    <TableCell className="capitalize">{e.interest}</TableCell>
                                    <TableCell>{e.referral ?? '-'}</TableCell>
                                    <TableCell>{e.newsletter ? <Check className='text-green-600 dark:text-green-400' /> : <X className='text-red-600 dark:text-red-400' />}</TableCell>
                                    <TableCell>{new Date(e.joined).toLocaleDateString()}</TableCell>
                                    <TableCell className="capitalize">
                                        <Select
                                            value={e.status}
                                            onValueChange={(val) =>
                                                setEntries((prev) =>
                                                    prev.map((x) => (x.id === e.id ? { ...x, status: val as WaitlistEntry['status'] } : x))
                                                )
                                            }
                                        >
                                            <SelectTrigger className="h-8 w-[140px]">
                                                <SelectValue />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="pending">Pending</SelectItem>
                                                <SelectItem value="contacted">Contacted</SelectItem>
                                                <SelectItem value="invited">Invited</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </TableCell>
                                    <TableCell>
                                        <div className="flex gap-2">
                                            <TooltipProvider>
                                                <Tooltip>
                                                    <TooltipTrigger asChild>
                                                        <Button
                                                            variant="outline"
                                                            size="icon"
                                                            onClick={() => {
                                                                setViewEntry(e)
                                                                setViewOpen(true)
                                                            }}
                                                            aria-label={`View ${e.name}`}
                                                        >
                                                            <Eye className="size-4" />
                                                        </Button>
                                                    </TooltipTrigger>
                                                    <TooltipContent>View</TooltipContent>
                                                </Tooltip>
                                                <Tooltip>
                                                    <TooltipTrigger asChild>
                                                        <Button variant="outline" size="icon" aria-label={`Invite ${e.name}`}>
                                                            <Mail className="size-4" />
                                                        </Button>
                                                    </TooltipTrigger>
                                                    <TooltipContent>Message</TooltipContent>
                                                </Tooltip>
                                                <Tooltip>
                                                    <TooltipTrigger asChild>
                                                        <Button
                                                            variant="outline"
                                                            size="icon"
                                                            onClick={() => {
                                                                setConfirmTarget({ type: 'single', id: e.id })
                                                                setConfirmOpen(true)
                                                            }}
                                                            aria-label={`Delete ${e.name}`}
                                                        >
                                                            <Trash2 className="size-4" />
                                                        </Button>
                                                    </TooltipTrigger>
                                                    <TooltipContent>Delete</TooltipContent>
                                                </Tooltip>
                                            </TooltipProvider>
                                        </div>
                                    </TableCell>
                                </TableRow>
                            ))
                        )}
                    </TableBody>
                </Table>
                {/* Pagination */}
                <div className="p-4">
                    <Pagination>
                        <PaginationContent>
                            <PaginationItem>
                                <PaginationPrevious
                                    href="#"
                                    onClick={(e) => { e.preventDefault(); setPage(Math.max(1, currentPage - 1)) }}
                                />
                            </PaginationItem>

                            {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
                                <PaginationItem key={p}>
                                    <PaginationLink
                                        href="#"
                                        isActive={p === currentPage}
                                        onClick={(e) => { e.preventDefault(); setPage(p) }}
                                    >
                                        {p}
                                    </PaginationLink>
                                </PaginationItem>
                            ))}

                            <PaginationItem>
                                <PaginationNext
                                    href="#"
                                    onClick={(e) => { e.preventDefault(); setPage(Math.min(totalPages, currentPage + 1)) }}
                                />
                            </PaginationItem>
                        </PaginationContent>
                    </Pagination>
                </div>
            </div>
            {/* View Dialog */}
            <Dialog open={viewOpen} onOpenChange={setViewOpen}>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Waitlist Entry</DialogTitle>
                        <DialogDescription>Details of the selected user</DialogDescription>
                    </DialogHeader>
                    {viewEntry && (
                        <div className="space-y-2 text-sm">
                            <div className="flex justify-between"><span className="text-muted-foreground">Name</span><span className="font-medium">{viewEntry.name}</span></div>
                            <div className="flex justify-between"><span className="text-muted-foreground">Email</span><span className="font-medium">{viewEntry.email}</span></div>
                            <div className="flex justify-between"><span className="text-muted-foreground">Interest</span><span className="font-medium capitalize">{viewEntry.interest}</span></div>
                            <div className="flex justify-between"><span className="text-muted-foreground">Referral</span><span className="font-medium">{viewEntry.referral ?? '-'}</span></div>
                            <div className="flex justify-between"><span className="text-muted-foreground">Newsletter</span><span className="font-medium">{viewEntry.newsletter ? 'Subscribed' : 'No'}</span></div>
                            <div className="flex justify-between"><span className="text-muted-foreground">Joined</span><span className="font-medium">{new Date(viewEntry.joined).toLocaleString()}</span></div>
                            <div className="flex justify-between"><span className="text-muted-foreground">Status</span><span className="font-medium capitalize">{viewEntry.status}</span></div>
                        </div>
                    )}
                </DialogContent>
            </Dialog>

            {/* Delete Confirm Dialog */}
            <Dialog open={confirmOpen} onOpenChange={setConfirmOpen}>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Confirm Deletion</DialogTitle>
                        <DialogDescription>
                            This action is irreversible. {confirmTarget?.type === 'bulk' ? `It will permanently delete ${selected.size} selected entr${selected.size === 1 ? 'y' : 'ies'}.` : 'It will permanently delete this entry.'}
                        </DialogDescription>
                    </DialogHeader>
                    <div className="flex justify-end gap-2">
                        <Button variant="outline" onClick={() => setConfirmOpen(false)}>Cancel</Button>
                        <Button variant="destructive" onClick={performDelete}>Delete</Button>
                    </div>
                </DialogContent>
            </Dialog>
        </div>
    )
}

export default WaitlistTable