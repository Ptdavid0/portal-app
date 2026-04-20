"use client";

export function TimesheetNovaPage() {
  return (
    <div className="min-h-full bg-[#F2F4F6] text-[#333333]">
      <style>{`
        ::-webkit-scrollbar { width: 6px; height: 6px; }
        ::-webkit-scrollbar-track { background: transparent; }
        ::-webkit-scrollbar-thumb { background: #cbd5e1; border-radius: 3px; }
        ::-webkit-scrollbar-thumb:hover { background: #94a3b8; }

        .calendar-grid {
          display: grid;
          grid-template-columns: repeat(7, 1fr);
          gap: 1px;
          background-color: #E5E7EB;
          border: 1px solid #D3D3D3;
        }
        .calendar-day { background-color: white; min-height: 80px; }
        .calendar-header-cell {
          background-color: #F9FAFB;
          padding: 8px;
          text-align: center;
          font-weight: 600;
          color: #6B7280;
          font-size: 0.875rem;
        }
        .table-scroll::-webkit-scrollbar { height: 8px; }
        .table-scroll::-webkit-scrollbar-thumb { background: #D1D5DB; border-radius: 4px; }
        .table-scroll::-webkit-scrollbar-track { background: #F3F4F6; }
      `}</style>

      <main className="p-5">
        <div className="flex flex-col gap-6">
              <div className="grid flex-1 basis-3/5 grid-cols-12 gap-6 min-h-0 shrink-0">
                <section className="col-span-5 flex h-full flex-col overflow-hidden">
                  <div className="mb-4 flex items-center justify-between shrink-0">
                    <h2 className="text-xl font-bold text-[#333333]">Projects</h2>
                    <button
                      type="button"
                      className="flex items-center gap-2 rounded-lg bg-[#eb550a] px-4 py-2 text-sm font-medium text-white shadow-sm transition-all hover:bg-[#d14908]"
                    >
                      <i className="fa-solid fa-plus" aria-hidden /> Add Project
                    </button>
                  </div>

                  <div className="flex-1 space-y-4 overflow-y-auto pb-4 pr-2">
                    <div className="group overflow-hidden rounded-xl border border-[#D3D3D3] bg-white shadow-sm">
                      <div className="flex cursor-pointer items-center justify-between border-b border-gray-100 bg-gray-50 p-4 transition-colors hover:bg-gray-100">
                        <div className="flex items-center gap-3">
                          <div className="flex h-8 w-8 items-center justify-center rounded border border-gray-200 bg-white text-[#eb550a] shadow-sm">
                            <i className="fa-solid fa-briefcase" aria-hidden />
                          </div>
                          <span className="font-semibold text-[#333333]">La Redoute - OutSourcing</span>
                        </div>
                        <i className="fa-solid fa-chevron-down text-gray-400" aria-hidden />
                      </div>

                      <div className="p-4">
                        <div className="mb-4 flex items-center justify-between">
                          <span className="text-xs font-semibold uppercase tracking-wider text-gray-500">My Activities</span>
                          <div className="flex gap-2">
                            <button
                              type="button"
                              className="rounded border border-transparent px-2 py-1 text-xs font-medium text-[#eb550a] transition-colors hover:border-orange-200 hover:bg-orange-50 hover:text-[#d14908]"
                            >
                              <i className="fa-solid fa-plus mr-1" aria-hidden /> New Activity
                            </button>
                          </div>
                        </div>

                        {/* Activity row 1 */}
                        <div className="group/row relative mb-3 rounded-lg border border-gray-200 bg-white p-3 transition-shadow hover:shadow-md">
                          <div className="flex flex-col gap-3">
                            <div className="flex w-full items-center gap-3">
                              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-600">
                                <i className="fa-solid fa-calendar-days text-sm" aria-hidden />
                              </div>
                              <select className="block flex-1 rounded-lg border border-gray-200 bg-gray-50 p-2 text-sm text-gray-700 outline-none focus:border-[#eb550a] focus:ring-[#eb550a]">
                                <option>Events</option>
                                <option>Lunch</option>
                                <option>On-call</option>
                                <option>Vacation</option>
                                <option>Work</option>
                                <option>Overtime</option>
                                <option>Night hours</option>
                              </select>
                              <button type="button" className="p-1 text-gray-300 transition-colors hover:text-red-500" aria-label="Remover">
                                <i className="fa-solid fa-xmark" aria-hidden />
                              </button>
                            </div>
                            <div className="flex items-center gap-3 border-t border-gray-100 pt-3">
                              <div className="flex items-center gap-2 rounded-lg border border-gray-200 bg-gray-50 p-1">
                                <input
                                  type="time"
                                  defaultValue="09:00"
                                  className="bg-transparent px-1 text-sm font-medium text-[#333333] focus:outline-none"
                                />
                                <span className="text-xs text-gray-400">-</span>
                                <input
                                  type="time"
                                  defaultValue="13:00"
                                  className="bg-transparent px-1 text-sm font-medium text-[#333333] focus:outline-none"
                                />
                              </div>
                              <div className="flex-1" />
                              <button
                                type="button"
                                className="group/btn flex items-center gap-2 rounded-md border border-[#eb550a] bg-white px-3 py-1.5 text-xs font-medium text-[#eb550a] shadow-sm transition-all hover:bg-[#eb550a] hover:text-white"
                              >
                                Add to Calendar
                                <i className="fa-solid fa-arrow-right transition-transform group-hover/btn:translate-x-1" aria-hidden />
                              </button>
                            </div>
                          </div>
                        </div>

                        {/* Activity row 2 */}
                        <div className="group/row relative mb-3 rounded-lg border border-gray-200 bg-white p-3 transition-shadow hover:shadow-md">
                          <div className="flex flex-col gap-3">
                            <div className="flex w-full items-center gap-3">
                              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-yellow-50 text-yellow-600">
                                <i className="fa-solid fa-utensils text-sm" aria-hidden />
                              </div>
                              <select className="block flex-1 rounded-lg border border-gray-200 bg-gray-50 p-2 text-sm text-gray-700 outline-none focus:border-[#eb550a] focus:ring-[#eb550a]">
                                <option>Lunch</option>
                                <option>Events</option>
                                <option>On-call</option>
                                <option>Vacation</option>
                                <option>Work</option>
                                <option>Overtime</option>
                                <option>Night hours</option>
                              </select>
                              <button type="button" className="p-1 text-gray-300 transition-colors hover:text-red-500" aria-label="Remover">
                                <i className="fa-solid fa-xmark" aria-hidden />
                              </button>
                            </div>
                            <div className="flex items-center gap-3 border-t border-gray-100 pt-3">
                              <div className="flex items-center gap-2 rounded-lg border border-gray-200 bg-gray-50 p-1">
                                <input
                                  type="time"
                                  defaultValue="12:00"
                                  className="bg-transparent px-1 text-sm font-medium text-[#333333] focus:outline-none"
                                />
                                <span className="text-xs text-gray-400">-</span>
                                <input
                                  type="time"
                                  defaultValue="13:00"
                                  className="bg-transparent px-1 text-sm font-medium text-[#333333] focus:outline-none"
                                />
                              </div>
                              <div className="flex-1" />
                              <button
                                type="button"
                                className="group/btn flex items-center gap-2 rounded-md border border-[#eb550a] bg-white px-3 py-1.5 text-xs font-medium text-[#eb550a] shadow-sm transition-all hover:bg-[#eb550a] hover:text-white"
                              >
                                Add to Calendar
                                <i className="fa-solid fa-arrow-right transition-transform group-hover/btn:translate-x-1" aria-hidden />
                              </button>
                            </div>
                          </div>
                        </div>

                        {/* Activity row 3 */}
                        <div className="group/row relative mb-3 rounded-lg border border-gray-200 bg-white p-3 transition-shadow hover:shadow-md">
                          <div className="flex flex-col gap-3">
                            <div className="flex w-full items-center gap-3">
                              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-600">
                                <i className="fa-solid fa-calendar-days text-sm" aria-hidden />
                              </div>
                              <select className="block flex-1 rounded-lg border border-gray-200 bg-gray-50 p-2 text-sm text-gray-700 outline-none focus:border-[#eb550a] focus:ring-[#eb550a]">
                                <option>Vacation</option>
                                <option>Events</option>
                                <option>Lunch</option>
                                <option>On-call</option>
                                <option>Work</option>
                                <option>Overtime</option>
                                <option>Night hours</option>
                              </select>
                              <button type="button" className="p-1 text-gray-300 transition-colors hover:text-red-500" aria-label="Remover">
                                <i className="fa-solid fa-xmark" aria-hidden />
                              </button>
                            </div>
                            <div className="flex items-center gap-3 border-t border-gray-100 pt-3">
                              <div className="flex items-center gap-2 rounded-lg border border-gray-200 bg-gray-50 p-1">
                                <input
                                  type="time"
                                  defaultValue="09:00"
                                  className="bg-transparent px-1 text-sm font-medium text-[#333333] focus:outline-none"
                                />
                                <span className="text-xs text-gray-400">-</span>
                                <input
                                  type="time"
                                  defaultValue="17:00"
                                  className="bg-transparent px-1 text-sm font-medium text-[#333333] focus:outline-none"
                                />
                              </div>
                              <div className="flex-1" />
                              <button
                                type="button"
                                className="group/btn flex items-center gap-2 rounded-md border border-[#eb550a] bg-white px-3 py-1.5 text-xs font-medium text-[#eb550a] shadow-sm transition-all hover:bg-[#eb550a] hover:text-white"
                              >
                                Add to Calendar
                                <i className="fa-solid fa-arrow-right transition-transform group-hover/btn:translate-x-1" aria-hidden />
                              </button>
                            </div>
                          </div>
                        </div>

                        {/* Activity row 4 */}
                        <div className="group/row relative mb-3 rounded-lg border border-gray-200 bg-white p-3 transition-shadow hover:shadow-md">
                          <div className="flex flex-col gap-3">
                            <div className="flex w-full items-center gap-3">
                              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-600">
                                <i className="fa-solid fa-calendar-days text-sm" aria-hidden />
                              </div>
                              <select className="block flex-1 rounded-lg border border-gray-200 bg-gray-50 p-2 text-sm text-gray-700 outline-none focus:border-[#eb550a] focus:ring-[#eb550a]">
                                <option>Work</option>
                                <option>Events</option>
                                <option>Lunch</option>
                                <option>On-call</option>
                                <option>Vacation</option>
                                <option>Overtime</option>
                                <option>Night hours</option>
                              </select>
                              <button type="button" className="p-1 text-gray-300 transition-colors hover:text-red-500" aria-label="Remover">
                                <i className="fa-solid fa-xmark" aria-hidden />
                              </button>
                            </div>
                            <div className="flex items-center gap-3 border-t border-gray-100 pt-3">
                              <div className="flex items-center gap-2 rounded-lg border border-gray-200 bg-gray-50 p-1">
                                <input
                                  type="time"
                                  defaultValue="14:00"
                                  className="bg-transparent px-1 text-sm font-medium text-[#333333] focus:outline-none"
                                />
                                <span className="text-xs text-gray-400">-</span>
                                <input
                                  type="time"
                                  defaultValue="18:00"
                                  className="bg-transparent px-1 text-sm font-medium text-[#333333] focus:outline-none"
                                />
                              </div>
                              <div className="flex-1" />
                              <button
                                type="button"
                                className="group/btn flex items-center gap-2 rounded-md border border-[#eb550a] bg-white px-3 py-1.5 text-xs font-medium text-[#eb550a] shadow-sm transition-all hover:bg-[#eb550a] hover:text-white"
                              >
                                Add to Calendar
                                <i className="fa-solid fa-arrow-right transition-transform group-hover/btn:translate-x-1" aria-hidden />
                              </button>
                            </div>
                          </div>
                        </div>

                        {/* Activity row 5 */}
                        <div className="group/row relative mb-3 rounded-lg border border-gray-200 bg-white p-3 transition-shadow hover:shadow-md">
                          <div className="flex flex-col gap-3">
                            <div className="flex w-full items-center gap-3">
                              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-600">
                                <i className="fa-solid fa-calendar-days text-sm" aria-hidden />
                              </div>
                              <select className="block flex-1 rounded-lg border border-gray-200 bg-gray-50 p-2 text-sm text-gray-700 outline-none focus:border-[#eb550a] focus:ring-[#eb550a]">
                                <option>Overtime</option>
                                <option>Events</option>
                                <option>Lunch</option>
                                <option>On-call</option>
                                <option>Vacation</option>
                                <option>Work</option>
                                <option>Night hours</option>
                              </select>
                              <button type="button" className="p-1 text-gray-300 transition-colors hover:text-red-500" aria-label="Remover">
                                <i className="fa-solid fa-xmark" aria-hidden />
                              </button>
                            </div>
                            <div className="flex items-center gap-3 border-t border-gray-100 pt-3">
                              <div className="flex items-center gap-2 rounded-lg border border-gray-200 bg-gray-50 p-1">
                                <input
                                  type="time"
                                  defaultValue="18:00"
                                  className="bg-transparent px-1 text-sm font-medium text-[#333333] focus:outline-none"
                                />
                                <span className="text-xs text-gray-400">-</span>
                                <input
                                  type="time"
                                  defaultValue="21:00"
                                  className="bg-transparent px-1 text-sm font-medium text-[#333333] focus:outline-none"
                                />
                              </div>
                              <div className="flex-1" />
                              <button
                                type="button"
                                className="group/btn flex items-center gap-2 rounded-md border border-[#eb550a] bg-white px-3 py-1.5 text-xs font-medium text-[#eb550a] shadow-sm transition-all hover:bg-[#eb550a] hover:text-white"
                              >
                                Add to Calendar
                                <i className="fa-solid fa-arrow-right transition-transform group-hover/btn:translate-x-1" aria-hidden />
                              </button>
                            </div>
                          </div>
                        </div>

                        <button
                          type="button"
                          className="mt-2 flex w-full items-center justify-center gap-2 rounded-lg bg-gray-800 py-2.5 text-sm font-medium text-white shadow-sm transition-all hover:bg-[#333333]"
                        >
                          Add All Activities to Calendar
                          <i className="fa-solid fa-layer-group" aria-hidden />
                        </button>
                      </div>
                    </div>

                    <div className="overflow-hidden rounded-xl border border-[#D3D3D3] bg-white opacity-75 shadow-sm transition-opacity hover:opacity-100">
                      <div className="flex cursor-pointer items-center justify-between p-4 transition-colors hover:bg-gray-50">
                        <div className="flex items-center gap-3">
                          <div className="flex h-8 w-8 items-center justify-center rounded border border-gray-200 bg-white text-gray-400">
                            <i className="fa-regular fa-folder" aria-hidden />
                          </div>
                          <span className="font-semibold text-gray-600">Internal - Training</span>
                        </div>
                        <i className="fa-solid fa-chevron-right text-gray-400" aria-hidden />
                      </div>
                    </div>
                  </div>
                </section>

                <section className="col-span-7 flex h-full flex-col overflow-hidden rounded-xl border border-[#D3D3D3] bg-white shadow-sm">
                  <div className="flex items-center justify-between border-b border-gray-100 bg-white p-5">
                    <div className="flex items-center gap-4">
                      <h2 className="text-xl font-bold text-[#333333]">February 2024</h2>
                      <div className="flex gap-1" />
                    </div>
                    <div className="flex items-center gap-3">
                      <button
                        type="button"
                        className="flex items-center gap-2 rounded-lg bg-gray-100 px-4 py-2.5 text-sm font-medium text-gray-600 shadow-sm transition-all hover:bg-gray-200"
                      >
                        <i className="fa-solid fa-copy" aria-hidden /> Copy
                      </button>
                      <button
                        type="button"
                        className="flex items-center gap-2 rounded-lg bg-gray-100 px-4 py-2.5 text-sm font-medium text-gray-600 shadow-sm transition-all hover:bg-gray-200"
                      >
                        <i className="fa-solid fa-trash" aria-hidden /> Remove
                      </button>
                      <button
                        type="button"
                        className="flex items-center gap-2 rounded-lg bg-[#eb550a] px-6 py-2.5 text-sm font-semibold text-white shadow-sm transition-all hover:bg-[#d14908]"
                      >
                        <i className="fa-solid fa-paper-plane" aria-hidden /> Submit
                      </button>
                    </div>
                  </div>

                  <div className="flex-1 overflow-auto p-5" style={{ height: 800 }}>
                    <div className="calendar-grid h-full">
                      <div className="calendar-header-cell">MON</div>
                      <div className="calendar-header-cell">TUE</div>
                      <div className="calendar-header-cell">WED</div>
                      <div className="calendar-header-cell">THU</div>
                      <div className="calendar-header-cell">FRI</div>
                      <div className="calendar-header-cell">SAT</div>
                      <div className="calendar-header-cell">SUN</div>

                      <div className="calendar-day p-2">
                        <div className="mb-1 text-xs font-medium text-gray-400">29</div>
                      </div>
                      <div className="calendar-day p-2">
                        <div className="mb-1 text-xs font-medium text-gray-400">30</div>
                      </div>
                      <div className="calendar-day p-2">
                        <div className="mb-1 text-xs font-medium text-gray-400">31</div>
                      </div>

                      <div className="calendar-day p-2">
                        <div className="mb-1 text-xs font-semibold text-[#333333]">1</div>
                        <div className="mb-1 rounded border border-blue-200 bg-blue-100 px-1 py-0.5 text-xs text-blue-700">4h - Work</div>
                        <div className="mb-1 rounded border border-yellow-200 bg-yellow-50 px-1 py-0.5 text-xs text-yellow-600">1h - Lunch</div>
                        <div className="mb-1 rounded border border-blue-200 bg-blue-100 px-1 py-0.5 text-xs text-blue-700">4h - Work</div>
                      </div>

                      <div className="calendar-day p-2">
                        <div className="mb-1 text-xs font-semibold text-[#333333]">2</div>
                        <div className="mb-1 rounded border border-blue-200 bg-blue-100 px-1 py-0.5 text-xs text-blue-700">4h - Work</div>
                        <div className="mb-1 rounded border border-yellow-200 bg-yellow-50 px-1 py-0.5 text-xs text-yellow-600">1h - Lunch</div>
                        <div className="mb-1 rounded border border-blue-200 bg-blue-100 px-1 py-0.5 text-xs text-blue-700">4h - Work</div>
                        <div className="mb-1 rounded border border-blue-200 bg-blue-100 px-1 py-0.5 text-xs text-blue-700">3h - Overtime</div>
                      </div>

                      <div className="calendar-day bg-gray-50 p-2">
                        <div className="mb-1 text-xs font-semibold text-[#333333]">3</div>
                      </div>
                      <div className="calendar-day bg-gray-50 p-2">
                        <div className="mb-1 text-xs font-semibold text-[#333333]">4</div>
                      </div>

                      <div className="calendar-day p-2">
                        <div className="mb-1 text-xs font-semibold text-[#333333]">5</div>
                        <div className="mb-1 rounded border border-blue-200 bg-blue-100 px-1 py-0.5 text-xs text-blue-700">4h - Work</div>
                        <div className="mb-1 rounded border border-yellow-200 bg-yellow-50 px-1 py-0.5 text-xs text-yellow-600">1h - Lunch</div>
                        <div className="mb-1 rounded border border-blue-200 bg-blue-100 px-1 py-0.5 text-xs text-blue-700">4h - Work</div>
                      </div>

                      <div className="calendar-day p-2">
                        <div className="mb-1 text-xs font-semibold text-[#333333]">6</div>
                        <div className="mb-1 rounded border border-blue-200 bg-blue-100 px-1 py-0.5 text-xs text-blue-700">4h - Work</div>
                        <div className="mb-1 rounded border border-yellow-200 bg-yellow-50 px-1 py-0.5 text-xs text-yellow-600">1h - Lunch</div>
                        <div className="mb-1 rounded border border-blue-200 bg-blue-100 px-1 py-0.5 text-xs text-blue-700">4h - Work</div>
                      </div>

                      <div className="calendar-day p-2">
                        <div className="mb-1 text-xs font-semibold text-[#333333]">7</div>
                        <div className="mb-1 rounded border border-blue-200 bg-blue-100 px-1 py-0.5 text-xs text-blue-700">4h - Work</div>
                        <div className="mb-1 rounded border border-yellow-200 bg-yellow-50 px-1 py-0.5 text-xs text-yellow-600">1h - Lunch</div>
                        <div className="mb-1 rounded border border-blue-200 bg-blue-100 px-1 py-0.5 text-xs text-blue-700">4h - Work</div>
                      </div>

                      <div className="calendar-day p-2">
                        <div className="mb-1 text-xs font-semibold text-[#333333]">8</div>
                        <div className="mb-1 rounded border border-blue-200 bg-blue-100 px-1 py-0.5 text-xs text-blue-700">4h - Work</div>
                        <div className="mb-1 rounded border border-yellow-200 bg-yellow-50 px-1 py-0.5 text-xs text-yellow-600">1h - Lunch</div>
                        <div className="mb-1 rounded border border-blue-200 bg-blue-100 px-1 py-0.5 text-xs text-blue-700">4h - Work</div>
                      </div>

                      <div className="calendar-day p-2">
                        <div className="mb-1 text-xs font-semibold text-[#333333]">9</div>
                        <div className="mb-1 rounded border border-blue-200 bg-blue-100 px-1 py-0.5 text-xs text-blue-700">4h - Work</div>
                        <div className="mb-1 rounded border border-yellow-200 bg-yellow-50 px-1 py-0.5 text-xs text-yellow-600">1h - Lunch</div>
                        <div className="mb-1 rounded border border-blue-200 bg-blue-100 px-1 py-0.5 text-xs text-blue-700">4h - Work</div>
                      </div>

                      <div className="calendar-day bg-gray-50 p-2">
                        <div className="mb-1 text-xs font-semibold text-[#333333]">10</div>
                      </div>
                      <div className="calendar-day bg-gray-50 p-2">
                        <div className="mb-1 text-xs font-semibold text-[#333333]">11</div>
                      </div>

                      <div className="calendar-day p-2">
                        <div className="mb-1 text-xs font-semibold text-[#333333]">12</div>
                        <div className="mb-1 rounded border border-blue-200 bg-blue-100 px-1 py-0.5 text-xs text-blue-700">4h - Work</div>
                        <div className="mb-1 rounded border border-yellow-200 bg-yellow-50 px-1 py-0.5 text-xs text-yellow-600">1h - Lunch</div>
                        <div className="mb-1 rounded border border-blue-200 bg-blue-100 px-1 py-0.5 text-xs text-blue-700">4h - Work</div>
                      </div>

                      <div className="calendar-day p-2">
                        <div className="mb-1 text-xs font-semibold text-[#333333]">13</div>
                        <div className="mb-1 rounded border border-blue-200 bg-blue-100 px-1 py-0.5 text-xs text-blue-700">4h - Work</div>
                        <div className="mb-1 rounded border border-yellow-200 bg-yellow-50 px-1 py-0.5 text-xs text-yellow-600">1h - Lunch</div>
                        <div className="mb-1 rounded border border-blue-200 bg-blue-100 px-1 py-0.5 text-xs text-blue-700">4h - Work</div>
                      </div>

                      <div className="calendar-day p-2">
                        <div className="mb-1 text-xs font-semibold text-[#333333]">14</div>
                        <div className="mb-1 rounded border border-blue-200 bg-blue-100 px-1 py-0.5 text-xs text-blue-700">4h - Work</div>
                        <div className="mb-1 rounded border border-yellow-200 bg-yellow-50 px-1 py-0.5 text-xs text-yellow-600">1h - Lunch</div>
                        <div className="mb-1 rounded border border-blue-200 bg-blue-100 px-1 py-0.5 text-xs text-blue-700">4h - Work</div>
                        <div className="mb-1 rounded border border-blue-200 bg-blue-100 px-1 py-0.5 text-xs text-blue-700">2h - Night hours</div>
                      </div>

                      <div className="calendar-day p-2">
                        <div className="mb-1 text-xs font-semibold text-[#333333]">15</div>
                        <div className="mb-1 rounded border border-blue-200 bg-blue-100 px-1 py-0.5 text-xs text-blue-700">4h - Work</div>
                        <div className="mb-1 rounded border border-yellow-200 bg-yellow-50 px-1 py-0.5 text-xs text-yellow-600">1h - Lunch</div>
                        <div className="mb-1 rounded border border-blue-200 bg-blue-100 px-1 py-0.5 text-xs text-blue-700">4h - Work</div>
                      </div>

                      <div className="calendar-day p-2">
                        <div className="mb-1 text-xs font-semibold text-[#333333]">16</div>
                        <div className="mb-1 rounded border border-blue-200 bg-blue-100 px-1 py-0.5 text-xs text-blue-700">4h - Work</div>
                        <div className="mb-1 rounded border border-yellow-200 bg-yellow-50 px-1 py-0.5 text-xs text-yellow-600">1h - Lunch</div>
                        <div className="mb-1 rounded border border-blue-200 bg-blue-100 px-1 py-0.5 text-xs text-blue-700">4h - Work</div>
                      </div>

                      <div className="calendar-day bg-gray-50 p-2">
                        <div className="mb-1 text-xs font-semibold text-[#333333]">17</div>
                      </div>
                      <div className="calendar-day bg-gray-50 p-2">
                        <div className="mb-1 text-xs font-semibold text-[#333333]">18</div>
                      </div>

                      <div className="calendar-day p-2">
                        <div className="mb-1 text-xs font-semibold text-[#333333]">19</div>
                        <div className="mb-1 rounded border border-blue-200 bg-blue-100 px-1 py-0.5 text-xs text-blue-700">4h - Work</div>
                        <div className="mb-1 rounded border border-yellow-200 bg-yellow-50 px-1 py-0.5 text-xs text-yellow-600">1h - Lunch</div>
                        <div className="mb-1 rounded border border-blue-200 bg-blue-100 px-1 py-0.5 text-xs text-blue-700">4h - Work</div>
                      </div>

                      <div className="calendar-day p-2">
                        <div className="mb-1 text-xs font-semibold text-[#333333]">20</div>
                        <div className="mb-1 rounded border border-blue-200 bg-blue-100 px-1 py-0.5 text-xs text-blue-700">4h - Work</div>
                        <div className="mb-1 rounded border border-yellow-200 bg-yellow-50 px-1 py-0.5 text-xs text-yellow-600">1h - Lunch</div>
                        <div className="mb-1 rounded border border-blue-200 bg-blue-100 px-1 py-0.5 text-xs text-blue-700">4h - Work</div>
                      </div>

                      <div className="calendar-day p-2">
                        <div className="mb-1 text-xs font-semibold text-[#333333]">21</div>
                        <div className="mb-1 rounded border border-blue-200 bg-blue-100 px-1 py-0.5 text-xs text-blue-700">4h - Work</div>
                        <div className="mb-1 rounded border border-yellow-200 bg-yellow-50 px-1 py-0.5 text-xs text-yellow-600">1h - Lunch</div>
                        <div className="mb-1 rounded border border-blue-200 bg-blue-100 px-1 py-0.5 text-xs text-blue-700">4h - Work</div>
                      </div>

                      <div className="calendar-day p-2">
                        <div className="mb-1 text-xs font-semibold text-[#333333]">22</div>
                        <div className="mb-1 rounded border border-blue-200 bg-blue-100 px-1 py-0.5 text-xs text-blue-700">4h - Work</div>
                        <div className="mb-1 rounded border border-yellow-200 bg-yellow-50 px-1 py-0.5 text-xs text-yellow-600">1h - Lunch</div>
                        <div className="mb-1 rounded border border-blue-200 bg-blue-100 px-1 py-0.5 text-xs text-blue-700">4h - Work</div>
                      </div>

                      <div className="calendar-day p-2">
                        <div className="mb-1 text-xs font-semibold text-[#333333]">23</div>
                        <div className="mb-1 rounded border border-blue-200 bg-blue-100 px-1 py-0.5 text-xs text-blue-700">4h - Work</div>
                        <div className="mb-1 rounded border border-yellow-200 bg-yellow-50 px-1 py-0.5 text-xs text-yellow-600">1h - Lunch</div>
                        <div className="mb-1 rounded border border-blue-200 bg-blue-100 px-1 py-0.5 text-xs text-blue-700">4h - Work</div>
                      </div>

                      <div className="calendar-day bg-gray-50 p-2">
                        <div className="mb-1 text-xs font-semibold text-[#333333]">24</div>
                      </div>
                      <div className="calendar-day bg-gray-50 p-2">
                        <div className="mb-1 text-xs font-semibold text-[#333333]">25</div>
                      </div>

                      <div className="calendar-day p-2">
                        <div className="mb-1 text-xs font-semibold text-[#333333]">26</div>
                        <div className="mb-1 rounded border border-blue-200 bg-blue-100 px-1 py-0.5 text-xs text-blue-700">4h - Work</div>
                        <div className="mb-1 rounded border border-yellow-200 bg-yellow-50 px-1 py-0.5 text-xs text-yellow-600">1h - Lunch</div>
                        <div className="mb-1 rounded border border-blue-200 bg-blue-100 px-1 py-0.5 text-xs text-blue-700">4h - Work</div>
                      </div>

                      <div className="calendar-day p-2">
                        <div className="mb-1 text-xs font-semibold text-[#333333]">27</div>
                        <div className="mb-1 rounded border border-blue-200 bg-blue-100 px-1 py-0.5 text-xs text-blue-700">4h - Work</div>
                        <div className="mb-1 rounded border border-yellow-200 bg-yellow-50 px-1 py-0.5 text-xs text-yellow-600">1h - Lunch</div>
                        <div className="mb-1 rounded border border-blue-200 bg-blue-100 px-1 py-0.5 text-xs text-blue-700">4h - Work</div>
                      </div>

                      <div className="calendar-day p-2">
                        <div className="mb-1 text-xs font-semibold text-[#333333]">28</div>
                        <div className="mb-1 rounded border border-blue-200 bg-blue-100 px-1 py-0.5 text-xs text-blue-700">4h - Work</div>
                        <div className="mb-1 rounded border border-yellow-200 bg-yellow-50 px-1 py-0.5 text-xs text-yellow-600">1h - Lunch</div>
                        <div className="mb-1 rounded border border-blue-200 bg-blue-100 px-1 py-0.5 text-xs text-blue-700">4h - Work</div>
                      </div>

                      <div className="calendar-day p-2">
                        <div className="mb-1 text-xs font-semibold text-[#333333]">29</div>
                        <div className="mb-1 rounded border border-[#D7BEFE] bg-[#E0C4F3] px-1 py-0.5 text-xs text-[#01050E]">8h - Vacation</div>
                      </div>

                      <div className="calendar-day p-2">
                        <div className="mb-1 text-xs font-medium text-gray-400">1</div>
                      </div>
                      <div className="calendar-day bg-gray-50 p-2">
                        <div className="mb-1 text-xs font-medium text-gray-400">2</div>
                      </div>
                      <div className="calendar-day bg-gray-50 p-2">
                        <div className="mb-1 text-xs font-medium text-gray-400">3</div>
                      </div>
                    </div>
                  </div>
                </section>
              </div>

              <div className="flex items-center justify-between border-b border-gray-100 bg-gray-50 px-4 py-2.5">
                <div className="flex items-center gap-2 text-xs text-gray-500">
                  <i className="fa-regular fa-eye text-gray-400" aria-hidden />
                  <span>All Projects Visible</span>
                </div>
                <div className="text-xs font-medium text-gray-600">
                  Total (h): <span className="font-bold text-[#333333]">173</span>
                </div>
              </div>

              <div className="flex min-h-0 flex-1 basis-2/5 flex-col gap-6">
                <section className="flex flex-col overflow-hidden rounded-xl border border-[#D3D3D3] bg-white shadow-sm">
                  <div className="flex items-center justify-between border-b border-gray-100 bg-white p-4">
                    <h3 className="text-base font-bold text-[#333333]">Summary</h3>
                    <span className="text-xs font-medium text-gray-500">February 2024</span>
                  </div>

                  <div className="w-full table-scroll overflow-x-auto">
                    <table className="w-full border-collapse text-xs">
                      <thead>
                        <tr className="bg-[#2D2D2D] text-white">
                          <th className="px-4 py-2.5 text-left font-semibold">Project</th>
                          {Array.from({ length: 29 }, (_, i) => (
                            <th key={i} className="w-8 px-1 py-2.5 text-center font-semibold">
                              {i + 1}
                            </th>
                          ))}
                          <th className="bg-gray-700 px-2 py-2.5 text-center font-semibold">Total</th>
                        </tr>
                      </thead>
                      <tbody className="text-[#333333]">
                        <tr className="border-b border-gray-100 transition-colors hover:bg-gray-50">
                          <td className="px-4 py-3 font-medium text-gray-700">La Redoute - OutSourcing</td>
                          <td className="text-center font-semibold text-[#333333]">8</td>
                          <td className="text-center font-semibold text-[#333333]">11</td>
                          <td className="text-center text-gray-400">-</td>
                          <td className="text-center text-gray-400">-</td>
                          <td className="text-center font-semibold text-[#333333]">8</td>
                          <td className="text-center font-semibold text-[#333333]">8</td>
                          <td className="text-center font-semibold text-[#333333]">8</td>
                          <td className="text-center font-semibold text-[#333333]">8</td>
                          <td className="text-center font-semibold text-[#333333]">8</td>
                          <td className="text-center text-gray-400">-</td>
                          <td className="text-center text-gray-400">-</td>
                          <td className="text-center font-semibold text-[#333333]">8</td>
                          <td className="text-center font-semibold text-[#333333]">8</td>
                          <td className="text-center font-semibold text-[#333333]">10</td>
                          <td className="text-center font-semibold text-[#333333]">8</td>
                          <td className="text-center font-semibold text-[#333333]">8</td>
                          <td className="text-center text-gray-400">-</td>
                          <td className="text-center text-gray-400">-</td>
                          <td className="text-center font-semibold text-[#333333]">8</td>
                          <td className="text-center font-semibold text-[#333333]">8</td>
                          <td className="text-center font-semibold text-[#333333]">8</td>
                          <td className="text-center font-semibold text-[#333333]">8</td>
                          <td className="text-center font-semibold text-[#333333]">8</td>
                          <td className="text-center text-gray-400">-</td>
                          <td className="text-center text-gray-400">-</td>
                          <td className="text-center font-semibold text-[#333333]">8</td>
                          <td className="text-center font-semibold text-[#333333]">8</td>
                          <td className="text-center font-semibold text-[#333333]">8</td>
                          <td className="text-center font-semibold text-[#333333]">8</td>
                          <td className="px-2 text-center font-bold text-[#eb550a]">173h</td>
                        </tr>

                        <tr className="border-b border-gray-100 transition-colors hover:bg-gray-50">
                          <td className="px-4 py-3 font-medium text-gray-700">Internal - Training</td>
                          {Array.from({ length: 29 }, (_, i) => (
                            <td key={i} className="text-center text-gray-400">
                              -
                            </td>
                          ))}
                          <td className="px-2 text-center font-bold text-[#eb550a]">0h</td>
                        </tr>

                        <tr className="bg-gray-50 font-bold">
                          <td className="px-4 py-3 text-[#333333]">Total Hours</td>
                          <td className="text-center text-[#333333]">8</td>
                          <td className="text-center text-[#333333]">11</td>
                          <td className="text-center text-gray-400">-</td>
                          <td className="text-center text-gray-400">-</td>
                          <td className="text-center text-[#333333]">8</td>
                          <td className="text-center text-[#333333]">8</td>
                          <td className="text-center text-[#333333]">8</td>
                          <td className="text-center text-[#333333]">8</td>
                          <td className="text-center text-[#333333]">8</td>
                          <td className="text-center text-gray-400">-</td>
                          <td className="text-center text-gray-400">-</td>
                          <td className="text-center text-[#333333]">8</td>
                          <td className="text-center text-[#333333]">8</td>
                          <td className="text-center text-[#333333]">10</td>
                          <td className="text-center text-[#333333]">8</td>
                          <td className="text-center text-[#333333]">8</td>
                          <td className="text-center text-gray-400">-</td>
                          <td className="text-center text-gray-400">-</td>
                          <td className="text-center text-[#333333]">8</td>
                          <td className="text-center text-[#333333]">8</td>
                          <td className="text-center text-[#333333]">8</td>
                          <td className="text-center text-[#333333]">8</td>
                          <td className="text-center text-[#333333]">8</td>
                          <td className="text-center text-gray-400">-</td>
                          <td className="text-center text-gray-400">-</td>
                          <td className="text-center text-[#333333]">8</td>
                          <td className="text-center text-[#333333]">8</td>
                          <td className="text-center text-[#333333]">8</td>
                          <td className="text-center text-[#333333]">8</td>
                          <td className="bg-gray-700 px-2 text-center font-bold text-white">173h</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </section>

                <section className="flex flex-col overflow-hidden rounded-xl border border-[#D3D3D3] bg-white shadow-sm">
                  <div className="flex items-center justify-between border-b border-gray-100 bg-white p-4">
                    <h3 className="text-base font-bold text-[#333333]">All Projects</h3>
                    <span className="text-xs font-medium text-gray-500">Overview</span>
                  </div>

                  <div className="w-full table-scroll overflow-x-auto">
                    <table className="w-full text-xs">
                      <thead>
                        <tr className="bg-[#2D2D2D] text-white">
                          <th className="px-4 py-2.5 text-left font-semibold">Project</th>
                          <th className="px-4 py-2.5 text-left font-semibold">Activity</th>
                          <th className="px-4 py-2.5 text-center font-semibold">Days Worked</th>
                          <th className="px-4 py-2.5 text-center font-semibold">Total Hours</th>
                          <th className="px-4 py-2.5 text-center font-semibold">Percentage</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b border-gray-100 transition-colors hover:bg-gray-50">
                          <td className="px-4 py-3 font-medium text-gray-700">La Redoute - OutSourcing</td>
                          <td className="px-4 py-3 text-gray-600">Work</td>
                          <td className="px-4 py-3 text-center text-gray-600">20</td>
                          <td className="px-4 py-3 text-center font-bold text-[#eb550a]">160h</td>
                          <td className="px-4 py-3 text-center">
                            <span className="inline-flex min-w-[45px] items-center justify-center rounded-full bg-green-100 px-2 py-1 text-xs font-bold text-green-700">
                              92%
                            </span>
                          </td>
                        </tr>
                        <tr className="border-b border-gray-100 transition-colors hover:bg-gray-50">
                          <td className="px-4 py-3 font-medium text-gray-700">La Redoute - OutSourcing</td>
                          <td className="px-4 py-3 text-gray-600">Overtime</td>
                          <td className="px-4 py-3 text-center text-gray-600">1</td>
                          <td className="px-4 py-3 text-center font-bold text-[#eb550a]">3h</td>
                          <td className="px-4 py-3 text-center">
                            <span className="inline-flex min-w-[45px] items-center justify-center rounded-full bg-blue-100 px-2 py-1 text-xs font-bold text-blue-700">
                              2%
                            </span>
                          </td>
                        </tr>
                        <tr className="border-b border-gray-100 transition-colors hover:bg-gray-50">
                          <td className="px-4 py-3 font-medium text-gray-700">La Redoute - OutSourcing</td>
                          <td className="px-4 py-3 text-gray-600">Night hours</td>
                          <td className="px-4 py-3 text-center text-gray-600">1</td>
                          <td className="px-4 py-3 text-center font-bold text-[#eb550a]">2h</td>
                          <td className="px-4 py-3 text-center">
                            <span className="inline-flex min-w-[45px] items-center justify-center rounded-full bg-purple-100 px-2 py-1 text-xs font-bold text-purple-700">
                              1%
                            </span>
                          </td>
                        </tr>
                        <tr className="border-b border-gray-100 transition-colors hover:bg-gray-50">
                          <td className="px-4 py-3 font-medium text-gray-700">La Redoute - OutSourcing</td>
                          <td className="px-4 py-3 text-gray-600">Vacation</td>
                          <td className="px-4 py-3 text-center text-gray-600">1</td>
                          <td className="px-4 py-3 text-center font-bold text-[#eb550a]">8h</td>
                          <td className="px-4 py-3 text-center">
                            <span className="inline-flex min-w-[45px] items-center justify-center rounded-full bg-orange-100 px-2 py-1 text-xs font-bold text-orange-700">
                              5%
                            </span>
                          </td>
                        </tr>
                        <tr className="bg-gray-50 font-bold">
                          <td colSpan={3} className="px-4 py-3 text-[#333333]">
                            Total
                          </td>
                          <td className="px-4 py-3 text-center font-bold text-[#eb550a]">173h</td>
                          <td className="px-4 py-3 text-center text-[#333333]">100%</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </section>
              </div>
        </div>
      </main>
    </div>
  );
}

