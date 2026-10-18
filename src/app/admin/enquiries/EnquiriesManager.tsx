"use client";

import React, { useState } from "react";
import {
  Inbox,
  Phone,
  Mail,
  Building,
  Calendar,
  CheckCircle2,
  Clock,
  AlertCircle,
  Filter,
  X,
  MessageSquare,
  ShieldCheck,
} from "lucide-react";
import { InquiryRecord, InquiryStatus, InquiryType } from "@/lib/db/types";
import { updateInquiryStatusAction } from "../actions";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";

interface EnquiriesManagerProps {
  initialInquiries: InquiryRecord[];
}

export function EnquiriesManager({ initialInquiries }: EnquiriesManagerProps) {
  const [inquiries, setInquiries] = useState<InquiryRecord[]>(initialInquiries);
  const [typeFilter, setTypeFilter] = useState<string>("all");
  const [statusFilter, setStatusFilter] = useState<string>("all");
  const [selectedInquiry, setSelectedInquiry] = useState<InquiryRecord | null>(null);
  const [statusVal, setStatusVal] = useState<InquiryStatus>("new");
  const [internalNotes, setInternalNotes] = useState("");
  const [isUpdating, setIsUpdating] = useState(false);

  const filtered = inquiries.filter((inq) => {
    if (typeFilter !== "all" && inq.inquiry_type !== typeFilter) return false;
    if (statusFilter !== "all" && inq.status !== statusFilter) return false;
    return true;
  });

  const openDetailModal = (inq: InquiryRecord) => {
    setSelectedInquiry(inq);
    setStatusVal(inq.status);
    setInternalNotes(inq.internal_notes || "");
  };

  const handleUpdateStatus = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedInquiry) return;

    setIsUpdating(true);
    const res = await updateInquiryStatusAction(selectedInquiry.id, statusVal, internalNotes);
    setIsUpdating(false);

    if (res.success && res.data) {
      const updated = res.data as InquiryRecord;
      setInquiries(inquiries.map((i) => (i.id === updated.id ? updated : i)));
      setSelectedInquiry(null);
    } else {
      alert(res.error || "Failed to update status.");
    }
  };

  return (
    <div className="space-y-6">
      {/* Header Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="font-heading text-xl font-bold text-slate-900 flex items-center gap-2">
            <Inbox className="w-5 h-5 text-brand-navy" />
            Confidential Inbound Inquiries ({filtered.length})
          </h2>
          <p className="text-xs text-slate-500">
            Citizen requests for volunteering, student sponsorship, CSR collaboration, and general queries.
          </p>
        </div>

        {/* Filter Controls */}
        <div className="flex flex-wrap items-center gap-2 text-xs">
          <select
            value={typeFilter}
            onChange={(e) => setTypeFilter(e.target.value)}
            className="px-3 py-1.5 bg-white border border-slate-200 rounded-xl font-medium text-slate-700"
          >
            <option value="all">All Inquiry Types</option>
            <option value="volunteer">Volunteering</option>
            <option value="sponsorship">Student Sponsorship</option>
            <option value="partnership">Corporate / CSR</option>
            <option value="general">General Contact</option>
          </select>

          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="px-3 py-1.5 bg-white border border-slate-200 rounded-xl font-medium text-slate-700"
          >
            <option value="all">All Statuses</option>
            <option value="new">New Inquiries</option>
            <option value="in_progress">In Progress</option>
            <option value="responded">Responded</option>
            <option value="resolved">Resolved</option>
            <option value="spam">Spam</option>
          </select>
        </div>
      </div>

      {/* Security Privacy Advisory */}
      <div className="p-3.5 bg-rose-50/60 border border-rose-200/80 rounded-2xl text-xs text-rose-950 flex items-start gap-2.5">
        <ShieldCheck className="w-4 h-4 text-rose-700 mt-0.5 shrink-0" />
        <div className="leading-relaxed">
          <span className="font-bold block">Strict PII Privacy Standards:</span>
          These records contain phone numbers and personal messages of citizens. Row Level Security (RLS)
          denies anonymous read access. Do not disclose or forward inquiry details outside authorized trust
          coordinators.
        </div>
      </div>

      {/* Inquiries List */}
      {filtered.length === 0 ? (
        <div className="py-12 bg-white rounded-3xl border border-slate-200 text-center text-slate-500 space-y-2">
          <Inbox className="w-10 h-10 text-slate-300 mx-auto" />
          <p className="text-sm font-semibold text-slate-700">No Inquiries Found</p>
          <p className="text-xs text-slate-400">There are no inquiries matching the active filters.</p>
        </div>
      ) : (
        <div className="space-y-3">
          {filtered.map((inq) => (
            <Card
              key={inq.id}
              className="p-5 border-slate-200 hover:border-slate-300 transition-all cursor-pointer"
              onClick={() => openDetailModal(inq)}
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
                <div className="space-y-1 max-w-2xl">
                  <div className="flex flex-wrap items-center gap-2">
                    <Badge
                      variant={
                        inq.status === "new"
                          ? "amber"
                          : inq.status === "in_progress"
                          ? "navy"
                          : inq.status === "responded"
                          ? "teal"
                          : "terracotta"
                      }
                      size="sm"
                    >
                      {inq.status.toUpperCase()}
                    </Badge>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
                      {inq.inquiry_type}
                    </span>
                    <span className="text-[11px] text-slate-400">
                      • {new Date(inq.created_at).toLocaleDateString("en-IN", {
                        day: "numeric",
                        month: "short",
                        year: "numeric",
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </span>
                  </div>

                  <h3 className="font-heading font-bold text-slate-900 text-base">{inq.full_name}</h3>

                  <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-slate-600">
                    <span className="flex items-center gap-1">
                      <Phone className="w-3.5 h-3.5 text-brand-navy" />
                      {inq.phone}
                    </span>
                    {inq.email && (
                      <span className="flex items-center gap-1">
                        <Mail className="w-3.5 h-3.5 text-slate-400" />
                        {inq.email}
                      </span>
                    )}
                    {inq.organization_name && (
                      <span className="flex items-center gap-1 text-slate-500">
                        <Building className="w-3.5 h-3.5 text-slate-400" />
                        {inq.organization_name}
                      </span>
                    )}
                  </div>

                  <p className="text-xs text-slate-700 italic line-clamp-1 pt-1">&ldquo;{inq.message}&rdquo;</p>
                </div>

                <div className="shrink-0 flex items-center gap-2 pt-2 md:pt-0">
                  <span className="text-xs font-semibold text-brand-navy hover:underline">
                    View & Update &rarr;
                  </span>
                </div>
              </div>
            </Card>
          ))}
        </div>
      )}

      {/* Detail / Status Modal */}
      {selectedInquiry && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-sm">
          <div className="bg-white rounded-3xl max-w-xl w-full p-6 sm:p-8 shadow-elevated border border-slate-200 space-y-5">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div>
                <span className="text-[10px] uppercase font-bold tracking-wider text-slate-400">
                  Inquiry Details
                </span>
                <h3 className="font-heading font-bold text-slate-900 text-lg">
                  {selectedInquiry.full_name}
                </h3>
              </div>
              <button
                onClick={() => setSelectedInquiry(null)}
                className="text-slate-400 hover:text-slate-700 p-1"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-3 text-xs">
              <div className="grid grid-cols-2 gap-3 p-3 bg-slate-50 rounded-2xl border border-slate-200">
                <div>
                  <span className="text-slate-400 text-[10px] uppercase font-bold block">Phone</span>
                  <a href={`tel:${selectedInquiry.phone}`} className="font-semibold text-brand-navy underline">
                    {selectedInquiry.phone}
                  </a>
                </div>
                <div>
                  <span className="text-slate-400 text-[10px] uppercase font-bold block">Email</span>
                  <span>{selectedInquiry.email || "Not Provided"}</span>
                </div>
                <div>
                  <span className="text-slate-400 text-[10px] uppercase font-bold block">Inquiry Type</span>
                  <span className="capitalize font-semibold">{selectedInquiry.inquiry_type}</span>
                </div>
                <div>
                  <span className="text-slate-400 text-[10px] uppercase font-bold block">Received</span>
                  <span>{new Date(selectedInquiry.created_at).toLocaleString("en-IN")}</span>
                </div>
              </div>

              {/* Full Inbound Message */}
              <div className="space-y-1">
                <span className="font-bold text-slate-800">Submitted Message:</span>
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-slate-800 leading-relaxed">
                  {selectedInquiry.message}
                </div>
              </div>

              {/* Status Update Form */}
              <form onSubmit={handleUpdateStatus} className="space-y-3 pt-2 border-t border-slate-100">
                <div className="space-y-1">
                  <label className="font-semibold text-slate-800">Workflow Status</label>
                  <select
                    value={statusVal}
                    onChange={(e) => setStatusVal(e.target.value as InquiryStatus)}
                    className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl"
                  >
                    <option value="new">New (Unread)</option>
                    <option value="in_progress">In Progress (Contact Initiated)</option>
                    <option value="responded">Responded</option>
                    <option value="resolved">Resolved / Enrolled</option>
                    <option value="spam">Spam / Discard</option>
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="font-semibold text-slate-800">Internal Coordinator Notes</label>
                  <textarea
                    rows={2}
                    value={internalNotes}
                    onChange={(e) => setInternalNotes(e.target.value)}
                    placeholder="e.g. Spoke to volunteer on phone; assigned to Saturday Mathematics classes."
                    className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl"
                  />
                </div>

                <div className="pt-2 flex items-center justify-end gap-2">
                  <button
                    type="button"
                    onClick={() => setSelectedInquiry(null)}
                    className="px-4 py-2 border border-slate-200 text-slate-600 rounded-xl"
                  >
                    Close
                  </button>
                  <button
                    type="submit"
                    disabled={isUpdating}
                    className="px-5 py-2 bg-brand-navy text-white font-semibold rounded-xl"
                  >
                    {isUpdating ? "Saving..." : "Save Status"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
