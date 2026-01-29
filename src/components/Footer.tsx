import React from 'react';
import { Heart, Github, Twitter, Linkedin, Mail, Globe, Code2, Sparkles } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: '#', label: 'GitHub', color: 'hover:text-purple-400' },
    { icon: Twitter, href: '#', label: 'Twitter', color: 'hover:text-blue-400' },
    { icon: Linkedin, href: '#', label: 'LinkedIn', color: 'hover:text-blue-500' },
    { icon: Mail, href: '#', label: 'Email', color: 'hover:text-pink-400' },
  ];

  const quickLinks = [
    { name: 'Features', href: '#features' },
    { name: 'Demo', href: '#demo' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  const resources = [
    { name: 'Documentation', href: '#' },
    { name: 'Tutorials', href: '#' },
    { name: 'API Reference', href: '#' },
    { name: 'Blog', href: '#' },
  ];

  return (
    <footer className="relative bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950 text-white overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Section */}
        <div className="py-12 sm:py-16 md:py-20 border-b border-white/10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 md:gap-12">
            {/* Brand Column */}
            <div className="space-y-4 sm:space-y-5 md:space-y-6">
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="relative">
                  <Globe className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 text-purple-400" />
                  <Sparkles className="absolute -top-1 -right-1 w-4 h-4 sm:w-5 sm:h-5 text-yellow-400 animate-pulse" />
                </div>
                <span className="text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Hello World
                </span>
              </div>
              <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
                Creating beautiful experiences with elegant code and modern design principles.
              </p>
              <div className="flex gap-3 sm:gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className={`group relative p-2 sm:p-2.5 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 transition-all duration-300 hover:scale-110 hover:border-white/30 ${social.color}`}
                  >
                    <social.icon className="w-4 h-4 sm:w-5 sm:h-5" />
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-4 sm:space-y-5">
              <h3 className="text-base sm:text-lg font-semibold text-white flex items-center gap-2">
                <div className="w-1 h-5 sm:h-6 bg-gradient-to-b from-purple-400 to-pink-400 rounded-full"></div>
                Quick Links
              </h3>
              <ul className="space-y-2 sm:space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="group inline-flex items-center gap-2 text-sm sm:text-base text-slate-400 hover:text-purple-400 transition-colors duration-300"
                    >
                      <span className="w-0 group-hover:w-2 h-0.5 bg-purple-400 transition-all duration-300"></span>
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div className="space-y-4 sm:space-y-5">
              <h3 className="text-base sm:text-lg font-semibold text-white flex items-center gap-2">
                <div className="w-1 h-5 sm:h-6 bg-gradient-to-b from-blue-400 to-purple-400 rounded-full"></div>
                Resources
              </h3>
              <ul className="space-y-2 sm:space-y-3">
                {resources.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="group inline-flex items-center gap-2 text-sm sm:text-base text-slate-400 hover:text-blue-400 transition-colors duration-300"
                    >
                      <span className="w-0 group-hover:w-2 h-0.5 bg-blue-400 transition-all duration-300"></span>
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Newsletter */}
            <div className="space-y-4 sm:space-y-5">
              <h3 className="text-base sm:text-lg font-semibold text-white flex items-center gap-2">
                <div className="w-1 h-5 sm:h-6 bg-gradient-to-b from-pink-400 to-purple-400 rounded-full"></div>
                Stay Updated
              </h3>
              <p className="text-xs sm:text-sm text-slate-400">
                Subscribe to get the latest updates and news.
              </p>
              <form className="space-y-2 sm:space-y-3">
                <div className="relative group">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full px-3 py-2 sm:px-4 sm:py-2.5 md:py-3 text-sm sm:text-base bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl text-white placeholder:text-slate-500 focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 transition-all duration-300"
                  />
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-purple-500/10 to-pink-500/10 opacity-0 group-focus-within:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                </div>
                <button
                  type="submit"
                  className="w-full px-4 py-2 sm:px-6 sm:py-2.5 md:py-3 text-sm sm:text-base font-semibold bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/30 active:scale-95"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="py-6 sm:py-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6">
            {/* Copyright */}
            <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-400">
              <span>© {currentYear} Hello World.</span>
              <span className="hidden sm:inline">Made with</span>
              <Heart className="w-3 h-3 sm:w-4 sm:h-4 text-pink-500 fill-pink-500 animate-pulse" />
              <span className="hidden sm:inline">and</span>
              <Code2 className="hidden sm:block w-3 h-3 sm:w-4 sm:h-4 text-purple-400" />
            </div>

            {/* Legal Links */}
            <div className="flex items-center gap-4 sm:gap-6 text-xs sm:text-sm">
              <a
                href="#"
                className="text-slate-400 hover:text-purple-400 transition-colors duration-300"
              >
                Privacy Policy
              </a>
              <span className="text-slate-700">•</span>
              <a
                href="#"
                className="text-slate-400 hover:text-purple-400 transition-colors duration-300"
              >
                Terms of Service
              </a>
              <span className="text-slate-700">•</span>
              <a
                href="#"
                className="text-slate-400 hover:text-purple-400 transition-colors duration-300"
              >
                Cookie Policy
              </a>
            </div>
          </div>

          {/* Decorative Line */}
          <div className="mt-6 sm:mt-8 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent"></div>
          
          {/* Tech Badge */}
          <div className="mt-4 sm:mt-6 text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10">
              <Code2 className="w-3 h-3 sm:w-4 sm:h-4 text-purple-400" />
              <span className="text-xs sm:text-sm text-slate-400">Built with React & Tailwind CSS</span>
              <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400 animate-pulse" />
            </div>
          </div>
        </div>
      </div>

      {/* Floating Particles */}
      <div className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 sm:w-2 sm:h-2 bg-purple-400 rounded-full opacity-30 animate-pulse"
            style={{
              left: `${15 + i * 15}%`,
              bottom: `${Math.random() * 50}%`,
              animationDelay: `${i * 0.3}s`,
            }}
          ></div>
        ))}
      </div>
    </footer>
  );
}