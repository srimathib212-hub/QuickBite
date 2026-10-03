import React from 'react';
import { useApp } from '../context/AppContext';
import {
  USABILITY_TEST_PLAN,
  SAMPLE_PARTICIPANTS,
  TEST_SCENARIOS,
  USER_OBSERVATIONS,
  USER_FEEDBACK_ITEMS,
  USABILITY_METRICS,
  DESIGN_IMPROVEMENTS
} from '../data/mockData';
import {
  FileText,
  Printer,
  CheckCircle2,
  AlertTriangle,
  Lightbulb,
  ArrowRight,
  Sparkles,
  Download,
  Info
} from 'lucide-react';

export const UsabilityReportView: React.FC = () => {
  const { setCurrentView } = useApp();

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12 animate-in fade-in duration-200">
      
      {/* Report Header Card */}
      <div className="bg-white p-6 sm:p-8 rounded-2xl border border-neutral-200 shadow-sm space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-neutral-200">
          <div>
            <span className="text-[11px] font-bold text-amber-600 uppercase tracking-wider block">
              UI/UX Internship Task Deliverable
            </span>
            <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-900">
              Usability Testing Report
            </h1>
            <p className="text-xs text-neutral-500 mt-1">
              Project: QuickBite Campus Food Ordering Platform · Evaluation Cycle 1
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="px-3.5 py-2 bg-neutral-100 hover:bg-neutral-200 text-neutral-800 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-colors"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / PDF</span>
            </button>
            <button
              onClick={() => setCurrentView('usability')}
              className="px-3.5 py-2 bg-neutral-900 hover:bg-neutral-800 text-white rounded-xl text-xs font-semibold transition-colors"
            >
              Live UX Dashboard
            </button>
          </div>
        </div>

        {/* Executive Meta Table */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs text-neutral-600 pt-1">
          <div>
            <span className="text-neutral-400 block text-[10px] uppercase font-bold">Author</span>
            <strong className="text-neutral-900">UI/UX Intern Candidate</strong>
          </div>
          <div>
            <span className="text-neutral-400 block text-[10px] uppercase font-bold">Product</span>
            <strong className="text-neutral-900">QuickBite v2.0</strong>
          </div>
          <div>
            <span className="text-neutral-400 block text-[10px] uppercase font-bold">Date</span>
            <strong className="text-neutral-900">Academic Year 2026</strong>
          </div>
          <div>
            <span className="text-neutral-400 block text-[10px] uppercase font-bold">Status</span>
            <strong className="text-emerald-700">Completed & Verified</strong>
          </div>
        </div>
      </div>

      {/* Main Document Body: Sections 1 through 11 */}
      <div className="bg-white p-6 sm:p-10 rounded-2xl border border-neutral-200 shadow-sm space-y-10 text-neutral-800 leading-relaxed text-xs sm:text-sm">
        
        {/* 1. Objective */}
        <section className="space-y-2 pb-6 border-b border-neutral-100">
          <div className="flex items-center gap-2">
            <span className="font-mono font-bold text-neutral-400 text-xs">01</span>
            <h2 className="text-lg font-bold text-neutral-900">Objective</h2>
          </div>
          <p className="text-neutral-600">
            The primary objective of this usability evaluation was to assess the efficiency, learnability, and satisfaction of the QuickBite campus food-ordering platform for university students. Specifically, testing focused on evaluating friction in discovering items under time constraints, customizing ingredients, selecting campus pickup slots, and monitoring live kitchen preparation.
          </p>
        </section>

        {/* 2. Target Users */}
        <section className="space-y-2 pb-6 border-b border-neutral-100">
          <div className="flex items-center gap-2">
            <span className="font-mono font-bold text-neutral-400 text-xs">02</span>
            <h2 className="text-lg font-bold text-neutral-900">Target Users</h2>
          </div>
          <p className="text-neutral-600">
            College undergraduate and postgraduate students who regularly patronize campus cafeteria counters during short class transitions (10–20 minute breaks) and rely on mobile/laptop digital ordering to skip counter lines.
          </p>
        </section>

        {/* 3. Testing Method */}
        <section className="space-y-2 pb-6 border-b border-neutral-100">
          <div className="flex items-center gap-2">
            <span className="font-mono font-bold text-neutral-400 text-xs">03</span>
            <h2 className="text-lg font-bold text-neutral-900">Testing Method</h2>
          </div>
          <p className="text-neutral-600">
            Moderated usability testing conducted using the Think-Aloud Protocol. Sessions ran approximately 10–15 minutes per participant on desktop/laptop viewports. Observers logged task completion times, hesitations, error recovery behaviors, and subjective feedback.
          </p>
        </section>

        {/* 4. Test Scenarios */}
        <section className="space-y-3 pb-6 border-b border-neutral-100">
          <div className="flex items-center gap-2">
            <span className="font-mono font-bold text-neutral-400 text-xs">04</span>
            <h2 className="text-lg font-bold text-neutral-900">Test Scenarios</h2>
          </div>
          <div className="space-y-2 text-xs">
            {TEST_SCENARIOS.map(t => (
              <div key={t.id} className="p-3 bg-neutral-50 rounded-xl border border-neutral-100 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <strong className="text-neutral-900 mr-2">{t.taskNumber}:</strong>
                  <span className="text-neutral-700">{t.scenarioTitle}</span>
                </div>
                <div className="flex items-center gap-2 text-[11px] shrink-0">
                  <span className="text-neutral-500">{t.timeTakenAvg}</span>
                  <span className="font-semibold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                    {t.completionStatus}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 5. Participant Profile */}
        <section className="space-y-3 pb-6 border-b border-neutral-100">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="font-mono font-bold text-neutral-400 text-xs">05</span>
              <h2 className="text-lg font-bold text-neutral-900">Participant Profile</h2>
            </div>
            <span className="text-[11px] text-neutral-400 font-medium">SAMPLE / DEMO USER TESTING DATA</span>
          </div>
          <div className="overflow-x-auto text-xs">
            <table className="w-full text-left">
              <thead className="bg-neutral-50 text-neutral-500 font-semibold border-b">
                <tr>
                  <th className="p-2.5">ID</th>
                  <th className="p-2.5">Name</th>
                  <th className="p-2.5">Degree Level</th>
                  <th className="p-2.5">Major</th>
                  <th className="p-2.5">Cafeteria Frequency</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-100">
                {SAMPLE_PARTICIPANTS.map(p => (
                  <tr key={p.id}>
                    <td className="p-2.5 font-mono font-bold">{p.id}</td>
                    <td className="p-2.5 font-semibold text-neutral-900">{p.name}</td>
                    <td className="p-2.5 text-neutral-600">{p.studentType}</td>
                    <td className="p-2.5 text-neutral-600">{p.major}</td>
                    <td className="p-2.5 text-neutral-600">{p.frequencyOfCafeteriaUse}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* 6. Observations */}
        <section className="space-y-3 pb-6 border-b border-neutral-100">
          <div className="flex items-center gap-2">
            <span className="font-mono font-bold text-neutral-400 text-xs">06</span>
            <h2 className="text-lg font-bold text-neutral-900">Observations</h2>
          </div>
          <ul className="space-y-2 text-xs text-neutral-700">
            <li className="p-2.5 bg-neutral-50 rounded-lg">
              <strong>P01 (Task 01):</strong> Located food category tabs effortlessly and applied price filter without guidance.
            </li>
            <li className="p-2.5 bg-amber-50/50 rounded-lg border border-amber-200/60">
              <strong>P02 (Task 02):</strong> Hesitated searching for wrap sauce options; customization section lacked clear callout.
            </li>
            <li className="p-2.5 bg-amber-50/50 rounded-lg border border-amber-200/60">
              <strong>P03 (Task 03):</strong> Reached checkout and proceeded to payment while initially overlooking the pickup-time dropdown.
            </li>
            <li className="p-2.5 bg-neutral-50 rounded-lg">
              <strong>P04 (Task 04):</strong> Track Order CTA on confirmation screen was identified within 2 seconds.
            </li>
            <li className="p-2.5 bg-blue-50/50 rounded-lg border border-blue-200/60">
              <strong>P05 (Task 05):</strong> Expected a dedicated "Reorder" button visible immediately on the receipt card.
            </li>
          </ul>
        </section>

        {/* 7. User Feedback */}
        <section className="space-y-3 pb-6 border-b border-neutral-100">
          <div className="flex items-center gap-2">
            <span className="font-mono font-bold text-neutral-400 text-xs">07</span>
            <h2 className="text-lg font-bold text-neutral-900">User Feedback</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
            <div className="p-3 bg-emerald-50 rounded-xl border border-emerald-200 text-emerald-950 space-y-1">
              <strong className="block font-bold">Positive Reactions:</strong>
              <p>"The menu is easy to browse."</p>
              <p>"I like seeing the total price before placing the order."</p>
              <p>"The order status is easy to understand."</p>
            </div>
            <div className="p-3 bg-amber-50 rounded-xl border border-amber-200 text-amber-950 space-y-1">
              <strong className="block font-bold">Critical Constructive Suggestions:</strong>
              <p>"I would like the pickup time to be more noticeable."</p>
              <p>"It would be useful to see popular items first."</p>
              <p>"The customization options could be easier to find."</p>
            </div>
          </div>
        </section>

        {/* 8. Usability Metrics */}
        <section className="space-y-3 pb-6 border-b border-neutral-100">
          <div className="flex items-center gap-2">
            <span className="font-mono font-bold text-neutral-400 text-xs">08</span>
            <h2 className="text-lg font-bold text-neutral-900">Usability Metrics</h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
            <div className="p-3 bg-neutral-50 rounded-xl text-center border border-neutral-200">
              <span className="text-neutral-400 block text-[10px] uppercase font-bold">Completion Rate</span>
              <strong className="text-2xl font-bold text-neutral-900">{USABILITY_METRICS.taskCompletionRate}%</strong>
            </div>
            <div className="p-3 bg-neutral-50 rounded-xl text-center border border-neutral-200">
              <span className="text-neutral-400 block text-[10px] uppercase font-bold">Average Task Time</span>
              <strong className="text-2xl font-bold text-neutral-900">{USABILITY_METRICS.averageTaskTimeSeconds}s</strong>
            </div>
            <div className="p-3 bg-neutral-50 rounded-xl text-center border border-neutral-200">
              <span className="text-neutral-400 block text-[10px] uppercase font-bold">Error Rate</span>
              <strong className="text-2xl font-bold text-neutral-900">{USABILITY_METRICS.errorRate}%</strong>
            </div>
            <div className="p-3 bg-neutral-50 rounded-xl text-center border border-neutral-200">
              <span className="text-neutral-400 block text-[10px] uppercase font-bold">Satisfaction Score</span>
              <strong className="text-2xl font-bold text-amber-600">{USABILITY_METRICS.userSatisfaction} / 5</strong>
            </div>
          </div>
        </section>

        {/* 9. Key Findings */}
        <section className="space-y-3 pb-6 border-b border-neutral-100">
          <div className="flex items-center gap-2">
            <span className="font-mono font-bold text-neutral-400 text-xs">09</span>
            <h2 className="text-lg font-bold text-neutral-900">Key Findings</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
            <div className="p-3 bg-neutral-50 rounded-xl space-y-1">
              <strong className="text-emerald-800 block font-bold">What Worked Well:</strong>
              <p className="text-neutral-600">• Food categories easy to browse</p>
              <p className="text-neutral-600">• Explicit Veg indicators and pricing</p>
              <p className="text-neutral-600">• Live order tracking transparency</p>
            </div>
            <div className="p-3 bg-neutral-50 rounded-xl space-y-1">
              <strong className="text-amber-800 block font-bold">Usability Issues:</strong>
              <p className="text-neutral-600">• Customization options secondary</p>
              <p className="text-neutral-600">• Pickup time lacked visual contrast</p>
              <p className="text-neutral-600">• Reorder action hidden in menus</p>
            </div>
            <div className="p-3 bg-neutral-50 rounded-xl space-y-1">
              <strong className="text-neutral-900 block font-bold">User Pain Points:</strong>
              <p className="text-neutral-600">• Wanted faster discovery of student favorites</p>
              <p className="text-neutral-600">• Risk of selecting wrong pickup slot</p>
              <p className="text-neutral-600">• Needed quick breakfast repeat orders</p>
            </div>
          </div>
        </section>

        {/* 10. Design Improvements */}
        <section className="space-y-3 pb-6 border-b border-neutral-100">
          <div className="flex items-center gap-2">
            <span className="font-mono font-bold text-neutral-400 text-xs">10</span>
            <h2 className="text-lg font-bold text-neutral-900">Design Improvements</h2>
          </div>
          <div className="space-y-2 text-xs">
            {DESIGN_IMPROVEMENTS.map(imp => (
              <div key={imp.id} className="p-3 bg-neutral-50 rounded-xl border border-neutral-200/80">
                <div className="flex justify-between font-bold text-neutral-900 mb-1">
                  <span>{imp.improvementNumber}: {imp.title}</span>
                  <span className="text-amber-700">{imp.severity} Severity</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px] text-neutral-600">
                  <p><strong className="text-red-700">Before:</strong> {imp.before}</p>
                  <p><strong className="text-emerald-700">After:</strong> {imp.after}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Final Summary Quote */}
        <div className="p-4 bg-amber-50 rounded-xl border border-amber-200 text-amber-950 font-medium text-xs leading-relaxed">
          <strong>Final Summary:</strong> "Usability testing helped identify opportunities to improve food discovery, customization visibility, pickup-time selection, and repeat ordering. The findings were translated into practical interface improvements."
        </div>

        {/* 11. Next Steps */}
        <section className="space-y-3">
          <div className="flex items-center gap-2">
            <span className="font-mono font-bold text-neutral-400 text-xs">11</span>
            <h2 className="text-lg font-bold text-neutral-900">Next Steps</h2>
          </div>
          <ul className="space-y-1.5 text-xs text-neutral-700 list-disc pl-5">
            <li>Conduct another round of moderated testing with the updated V2 release.</li>
            <li>Test with a larger group of students across diverse academic disciplines.</li>
            <li>Evaluate mobile phone usability in noisy campus food courts.</li>
            <li>Compare task completion metrics before and after the redesign.</li>
            <li>Continue refining the ordering experience based on continuous student kitchen telemetry.</li>
          </ul>
        </section>

      </div>
    </div>
  );
};
