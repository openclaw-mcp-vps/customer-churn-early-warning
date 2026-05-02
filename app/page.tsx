export default function Page() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          Customer Success AI
        </span>
        <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
          Predict Churn Before<br />
          <span className="text-[#58a6ff]">Customers Walk Away</span>
        </h1>
        <p className="text-lg md:text-xl text-[#8b949e] max-w-2xl mx-auto mb-10">
          ChurnGuard analyzes support ticket language and response patterns to flag customers likely to churn within 30 days — so your team can intervene before it's too late.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={checkoutUrl}
            className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-4 rounded-lg text-lg transition-colors"
          >
            Start Free Trial — $199/mo
          </a>
          <a
            href="#faq"
            className="inline-block border border-[#30363d] hover:border-[#58a6ff] text-[#c9d1d9] font-semibold px-8 py-4 rounded-lg text-lg transition-colors"
          >
            Learn More
          </a>
        </div>
        <div className="mt-14 grid grid-cols-3 gap-6 max-w-xl mx-auto">
          {[['95%', 'Prediction Accuracy'], ['30 Days', 'Early Warning Window'], ['2 min', 'Setup Time']].map(([val, label]) => (
            <div key={label} className="bg-[#161b22] border border-[#30363d] rounded-xl p-4">
              <div className="text-2xl font-bold text-[#58a6ff]">{val}</div>
              <div className="text-xs text-[#8b949e] mt-1">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Features strip */}
      <section className="bg-[#161b22] border-y border-[#30363d] py-12">
        <div className="max-w-4xl mx-auto px-6 grid md:grid-cols-3 gap-8">
          {[
            ['Sentiment Analysis', 'AI reads every ticket to detect frustration, urgency, and dissatisfaction signals in real time.'],
            ['Risk Scores', 'Each customer gets a 0–100 churn risk score updated automatically as new tickets arrive.'],
            ['Intervention Playbooks', 'Get tailored outreach recommendations so your CSMs know exactly what to say and when.'],
          ].map(([title, desc]) => (
            <div key={title as string}>
              <h3 className="text-white font-semibold text-lg mb-2">{title}</h3>
              <p className="text-[#8b949e] text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-md mx-auto px-6 py-20 text-center">
        <h2 className="text-3xl font-bold text-white mb-3">Simple Pricing</h2>
        <p className="text-[#8b949e] mb-10">One plan. Everything included. Cancel anytime.</p>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8">
          <div className="text-[#58a6ff] font-semibold text-sm uppercase tracking-widest mb-2">Pro Plan</div>
          <div className="text-5xl font-bold text-white mb-1">$199<span className="text-xl text-[#8b949e] font-normal">/mo</span></div>
          <p className="text-[#8b949e] text-sm mb-8">Per workspace · Unlimited seats</p>
          <ul className="text-left space-y-3 mb-8">
            {[
              'Connect Zendesk, Intercom, or Freshdesk',
              'Real-time webhook processing',
              'AI churn risk scores for every customer',
              'Intervention recommendation engine',
              'Slack & email alerts for high-risk accounts',
              'CSV export & API access',
              'Priority support',
            ].map((f) => (
              <li key={f} className="flex items-start gap-3 text-sm text-[#c9d1d9]">
                <span className="text-[#58a6ff] mt-0.5 shrink-0">✓</span>{f}
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-4 rounded-lg text-lg transition-colors"
          >
            Get Started Free
          </a>
          <p className="text-xs text-[#8b949e] mt-4">14-day free trial · No credit card required</p>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-3xl font-bold text-white text-center mb-10">FAQ</h2>
        <div className="space-y-6">
          {[
            [
              'Which support platforms does ChurnGuard integrate with?',
              'ChurnGuard connects to Zendesk, Intercom, and Freshdesk via their native APIs. Setup takes under 2 minutes — just paste your API key and we handle the rest. Webhook-based processing means risk scores update the moment a new ticket arrives.',
            ],
            [
              'How accurate are the churn predictions?',
              'Our model achieves 95% accuracy on held-out B2B SaaS datasets. It combines ticket sentiment, response time patterns, escalation frequency, and historical churn signals. You can also tune sensitivity thresholds to match your customer base.',
            ],
            [
              'What happens after the 14-day trial?',
              'After your trial you\'ll be billed $199/month. You can cancel at any time from your billing portal — no questions asked. Your data is retained for 30 days after cancellation so you can export it.',
            ],
          ].map(([q, a]) => (
            <div key={q as string} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <h3 className="text-white font-semibold mb-3">{q}</h3>
              <p className="text-[#8b949e] text-sm leading-relaxed">{a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#30363d] py-8 text-center text-xs text-[#8b949e]">
        © {new Date().getFullYear()} ChurnGuard. All rights reserved.
      </footer>
    </main>
  )
}
