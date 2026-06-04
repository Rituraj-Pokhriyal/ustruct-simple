import Image from "next/image";
import Link from "next/link";
import { COMPANY } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="border-t border-border" style={{ background: "#080909" }}>
      <div className="max-w-7xl mx-auto px-6 py-14">
        <div className="grid md:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div>
            <div className="mb-4">
              <Image src="/logo.png" alt={COMPANY.name} width={120} height={40} style={{ height: 40, width: "auto", objectFit: "contain" }} />
            </div>
            <p className="text-base text-text-muted leading-relaxed max-w-xs">
              Professional steel detailing services — precision shop drawings, GA drawings, and BIM coordination delivered by industry experts.
            </p>
          </div>

          {/* Services */}
          <div>
            <p className="text-sm font-bold text-text-muted uppercase tracking-widest mb-4">Services</p>
            <ul className="space-y-2 text-base text-text-muted">
              {["Structural Steel", "Miscellaneous Steel", "Shop Drawings", "GA Drawings", "Tekla 3D Modeling", "BIM Coordination", "CNC Detailing"].map(s => (
                <li key={s}>
                  <Link href="/services" className="hover:text-steel-blue transition-colors duration-200">
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-sm font-bold text-text-muted uppercase tracking-widest mb-4">Contact</p>
            <div className="space-y-3 text-base text-text-muted">
              <a href={`mailto:${COMPANY.email}`} className="block hover:text-steel-blue transition-colors">
                {COMPANY.email}
              </a>
              <a href={COMPANY.whatsappLink} target="_blank" rel="noopener noreferrer" className="block hover:text-steel-blue transition-colors">
                WhatsApp: {COMPANY.whatsapp}
              </a>
              <p>Delhi, India</p>
              <p className="text-sm">Available across time zones</p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-border pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-text-muted">
            &copy; {new Date().getFullYear()} {COMPANY.fullName}. All rights reserved.
          </p>
          <p className="text-sm text-text-muted">
            {COMPANY.tagline}
          </p>
        </div>
      </div>

      {/* Floating WhatsApp */}
      <a
        href={COMPANY.whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 rounded-full flex items-center justify-center text-white shadow-lg z-40 transition-transform hover:scale-110"
        style={{ background: "#25D366", width: 52, height: 52 }}
        title="Chat on WhatsApp"
      >
        <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      </a>
    </footer>
  );
}
