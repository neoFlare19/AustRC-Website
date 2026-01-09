import { motion } from 'motion/react';
import { useState, useEffect } from 'react';
import {
  Lightbulb,
  GraduationCap,
  MessageSquare,
  Users,
  FileText,
  Cpu,
  Target,
  Eye,
  Mail,
  Facebook,
  Linkedin,
  Instagram,
  Trophy,
  Rocket,
  BookOpen
} from 'lucide-react';
import { Link } from 'react-router-dom';

export function AboutPage() {
  const [typedText, setTypedText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const fullText = 'AUST Robotics Club';

  useEffect(() => {
    let currentIndex = 0;

    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setTypedText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, 100);

    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);

    return () => {
      clearInterval(typingInterval);
      clearInterval(cursorInterval);
    };
  }, []);

  const objectives = [
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: 'Innovative Development',
      description: 'Fostering creativity and innovation in robotics through hands-on projects and cutting-edge technology.'
    },
    {
      icon: <GraduationCap className="w-8 h-8" />,
      title: 'Knowledge Enhancement',
      description: 'Organizing workshops, trainings, and competitions to enhance technical skills and expertise.'
    },
    {
      icon: <MessageSquare className="w-8 h-8" />,
      title: 'Educational Outreach',
      description: 'Conducting seminars, discussions, and knowledge-sharing sessions for continuous learning.'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Social Development',
      description: 'Building strong collaborations and networks within and beyond AUST community.'
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: 'Information Sharing',
      description: 'Publishing newsletters, magazines, and updates to keep members informed and engaged.'
    },
    {
      icon: <Cpu className="w-8 h-8" />,
      title: 'Robotics Excellence',
      description: 'Driving excellence in robotics through research, development, and practical applications.'
    }
  ];

  const socialLinks = [
    {
      name: 'Facebook',
      icon: <Facebook className="w-6 h-6" />,
      url: 'https://www.facebook.com/austrc',
      color: '#1877F2'
    },
    {
      name: 'LinkedIn',
      icon: <Linkedin className="w-6 h-6" />,
      url: 'https://www.linkedin.com/company/austrc',
      color: '#0A66C2'
    },
    {
      name: 'Instagram',
      icon: <Instagram className="w-6 h-6" />,
      url: 'https://www.instagram.com/austrc',
      color: '#E4405F'
    }
  ];

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden bg-gradient-to-b from-black via-gray-900 to-black">
        {/* Animated Background Orbs */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute top-0 left-1/4 w-96 h-96 bg-[#2ECC71] rounded-full blur-[150px] opacity-30"
            animate={{
              scale: [1, 1.2, 1],
              x: [0, 50, 0],
              y: [0, 30, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#27AE60] rounded-full blur-[150px] opacity-20"
            animate={{
              scale: [1, 1.3, 1],
              x: [0, -50, 0],
              y: [0, -30, 0],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute top-1/3 left-1/3 w-64 h-64 bg-[#2ECC71] rounded-full blur-[100px] opacity-15"
            animate={{
              scale: [1, 1.4, 1],
              rotate: [0, 90, 0],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            {/* Logo */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex justify-center mb-8"
            >
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-[#2ECC71] to-[#27AE60] rounded-3xl blur-3xl opacity-80 group-hover:opacity-100 transition-opacity" />
                <div className="relative w-32 h-32 bg-gradient-to-br from-[#2ECC71] to-[#27AE60] rounded-3xl flex items-center justify-center shadow-[0_0_100px_0_rgba(46,204,113,0.8)] border-2 border-[rgba(46,204,113,0.3)]">
                  <span className="text-white text-6xl">A</span>
                </div>
              </div>
            </motion.div>

            <h1 className="text-5xl md:text-7xl mb-6 bg-gradient-to-r from-[#2ECC71] via-[#27AE60] to-[#2ECC71] bg-clip-text text-transparent">
              {typedText}{showCursor ? '|' : ''}
            </h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-2xl md:text-3xl mb-4 text-gray-300 italic"
            >
              "Robotics for Building a Safer Future"
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-xl text-gray-400"
            >
              Where innovation meets aspiration
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Intro/Overview Section */}
      <section className="py-20 relative bg-gradient-to-b from-black via-gray-900 to-black overflow-hidden scroll-mt-20">
        <div className="absolute inset-0 opacity-10">
          <motion.div
            className="absolute top-1/4 left-1/3 w-96 h-96 bg-[#2ECC71] rounded-full blur-[120px]"
            animate={{
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative max-w-4xl mx-auto"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#2ECC71]/20 via-green-300/10 to-[#27AE60]/20 rounded-3xl blur-2xl" />
            <div className="relative bg-black/60 backdrop-blur-xl border border-[rgba(46,204,113,0.3)] rounded-3xl p-8 md:p-12 shadow-[0_20px_60px_0_rgba(46,204,113,0.4)] hover:shadow-[0_20px_60px_0_rgba(46,204,113,0.6)] transition-all duration-300">
              <h2 className="text-4xl md:text-5xl mb-8 text-center bg-gradient-to-r from-[#2ECC71] via-green-400 to-[#27AE60] bg-clip-text text-transparent">
                About AUSTRC
              </h2>
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed text-center">
                AUSTRC is a leading student robotics club at Ahsanullah University of Science and Technology,
                established in Fall 2021. With an active student-community, the club encourages developing and
                materializing innovative robotics ideas — from microcontroller-based bots to large-scale projects
                like Mars Rover & autonomous quadcopters.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 relative bg-gradient-to-b from-black via-gray-900 to-black overflow-hidden scroll-mt-20">
        <div className="absolute inset-0 opacity-10">
          <motion.div
            className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-[#27AE60] rounded-full blur-[120px]"
            animate={{
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl mb-16 text-center bg-gradient-to-r from-[#2ECC71] via-green-400 to-[#27AE60] bg-clip-text text-transparent"
          >
            Mission & Vision
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#2ECC71]/20 to-green-300/10 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-300" />
              <div className="relative bg-black/40 backdrop-blur-sm border border-[rgba(46,204,113,0.3)] rounded-3xl p-8 md:p-10 h-full hover:border-[rgba(46,204,113,0.6)] transition-all duration-300 hover:shadow-[0_20px_60px_0_rgba(46,204,113,0.4)]">
                <div className="flex items-center gap-4 mb-6">
                  <div className="bg-gradient-to-br from-[#2ECC71] to-[#27AE60] p-4 rounded-2xl shadow-[0_10px_40px_0_rgba(46,204,113,0.6)] border border-[rgba(46,204,113,0.3)]">
                    <Target className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-3xl text-[#2ECC71]">Our Mission</h3>
                </div>
                <p className="text-lg text-gray-300 leading-relaxed">
                  To enrich knowledge in robotics and foster sustainable projects through comprehensive
                  educational programs, interactive workshops, specialized training sessions, and competitive
                  events. We aim to empower students with practical skills and theoretical knowledge to excel
                  in the field of robotics and automation.
                </p>
              </div>
            </motion.div>

            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-green-300/10 to-[#2ECC71]/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-300" />
              <div className="relative bg-black/40 backdrop-blur-sm border border-[rgba(46,204,113,0.3)] rounded-3xl p-8 md:p-10 h-full hover:border-[rgba(46,204,113,0.6)] transition-all duration-300 hover:shadow-[0_20px_60px_0_rgba(46,204,113,0.4)]">
                <div className="flex items-center gap-4 mb-6">
                  <div className="bg-gradient-to-br from-[#2ECC71] to-[#27AE60] p-4 rounded-2xl shadow-[0_10px_40px_0_rgba(46,204,113,0.6)] border border-[rgba(46,204,113,0.3)]">
                    <Eye className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-3xl text-[#2ECC71]">Our Vision</h3>
                </div>
                <p className="text-lg text-gray-300 leading-relaxed">
                  To build strong bonds across clubs and groups inside and outside AUST, combining technological
                  growth with social development. We envision a collaborative ecosystem where innovation thrives,
                  knowledge is shared freely, and robotics enthusiasts from diverse backgrounds unite to create
                  impactful solutions for tomorrow's challenges.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Objectives Section */}
      <section className="py-20 relative bg-gradient-to-b from-black via-gray-900 to-black overflow-hidden scroll-mt-20">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 right-1/3 w-96 h-96 bg-[#2ECC71] rounded-full blur-[120px]" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl mb-8 text-center bg-gradient-to-r from-[#2ECC71] via-green-400 to-[#27AE60] bg-clip-text text-transparent"
          >
            Our Objectives
          </motion.h2>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-2xl md:text-2xl mb-12 text-center text-gray-300"
          >
            Six core pillars that guide our journey
          </motion.h1>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {objectives.map((objective, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative group h-full"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#2ECC71]/10 to-green-300/5 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300" />
                <div className="relative bg-black/40 backdrop-blur-sm border border-[rgba(46,204,113,0.2)] rounded-2xl p-6 h-full hover:border-[rgba(46,204,113,0.5)] transition-all duration-300 hover:shadow-[0_15px_40px_0_rgba(46,204,113,0.3)] hover:-translate-y-1">
                  <div className="bg-gradient-to-br from-[#2ECC71] to-[#27AE60] p-4 rounded-xl inline-block mb-6 shadow-[0_10px_40px_0_rgba(46,204,113,0.6)] group-hover:shadow-[0_15px_50px_0_rgba(46,204,113,0.8)] transition-all duration-300 border border-[rgba(46,204,113,0.3)] text-white">
                    {objective.icon}
                  </div>
                  <h3 className="text-2xl mb-4 text-white group-hover:text-[#2ECC71] transition-colors duration-300">
                    {objective.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {objective.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Membership Information Section */}
      <section className="py-20 relative bg-gradient-to-b from-black via-gray-900 to-black overflow-hidden scroll-mt-20">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-[#27AE60] rounded-full blur-[120px]" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl mb-8 text-center bg-gradient-to-r from-[#2ECC71] via-green-400 to-[#27AE60] bg-clip-text text-transparent"
          >
            Membership Information
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative max-w-3xl mx-auto"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#2ECC71]/10 to-green-300/5 rounded-3xl blur-2xl" />
            <div className="relative bg-black/40 backdrop-blur-xl border border-[rgba(46,204,113,0.3)] rounded-3xl p-8 md:p-10 shadow-[0_30px_100px_0_rgba(46,204,113,0.4)]">

              {/* Who Can Join Section */}
              <div className="mb-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="bg-gradient-to-br from-[#2ECC71] to-[#27AE60] p-3 rounded-xl shadow-[0_10px_40px_0_rgba(46,204,113,0.6)] border border-[rgba(46,204,113,0.3)]">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl text-[#2ECC71]">Who Can Join?</h3>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  Any AUST student interested in robotics, automation, or technology can become a member of AUSTRC.
                  We welcome students from all departments and skill levels.
                </p>
              </div>

              {/* Divider */}
              <div className="my-8 h-px bg-gradient-to-r from-transparent via-[rgba(46,204,113,0.3)] to-transparent" />

              {/* Membership Fee Section */}
              <div className="mb-10">
                <h3 className="text-2xl mb-4 text-[#2ECC71]">Membership Fee</h3>
                <div className="bg-gradient-to-r from-[rgba(46,204,113,0.1)] to-transparent border-l-4 border-[#2ECC71] p-5 rounded-lg mb-4">
                  <div className="text-3xl font-bold text-white mb-2">500 BDT</div>
                  <div className="text-gray-400 text-sm">(One-time fee)</div>
                </div>
                <p className="text-gray-300">
                  A one-time registration fee grants you full club rights and privileges, including access to
                  workshops, equipment, mentorship, and all club activities.
                </p>
              </div>

              {/* Divider */}
              <div className="my-8 h-px bg-gradient-to-r from-transparent via-[rgba(46,204,113,0.3)] to-transparent" />

              {/* Member Benefits Section */}
              <div>
                <h3 className="text-2xl mb-6 text-[#2ECC71]">Member Benefits</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    "Access to all workshops and training sessions",
                    "Use of club equipment and laboratory facilities",
                    "Participation in competitions and events",
                    "Mentorship from experienced members and faculty",
                    "Networking opportunities with industry professionals",
                    "Certificate of membership and participation"
                  ].map((benefit, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-5 h-5 mt-1 flex-shrink-0">
                        <div className="w-4 h-4 border-2 border-[#2ECC71] rounded-sm flex items-center justify-center">
                          <div className="w-2 h-2 bg-[#2ECC71] rounded-sm" />
                        </div>
                      </div>
                      <span className="text-gray-300">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 relative bg-gradient-to-b from-black via-gray-900 to-black overflow-hidden scroll-mt-20">
        <div className="absolute inset-0 opacity-10">
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#2ECC71] rounded-full blur-[120px]"
            animate={{
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl mb-16 text-center bg-gradient-to-r from-[#2ECC71] via-green-400 to-[#27AE60] bg-clip-text text-transparent"
          >
            Get In Touch
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative max-w-4xl mx-auto"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#2ECC71]/10 via-green-300/5 to-[#27AE60]/10 rounded-3xl blur-2xl" />
            <div className="relative bg-black/40 backdrop-blur-xl border border-[rgba(46,204,113,0.3)] rounded-3xl p-8 md:p-12 shadow-[0_30px_100px_0_rgba(46,204,113,0.4)] hover:shadow-[0_30px_100px_0_rgba(46,204,113,0.6)] transition-all duration-300">

              {/* Email Section */}
              <div className="mb-12">
                <h3 className="text-2xl mb-4 text-white">Email</h3>
                <div className="bg-gradient-to-r from-[rgba(46,204,113,0.1)] to-transparent border-l-4 border-[#2ECC71] rounded-lg">
                  <a
                    href="mailto:contact@austrc.com"
                    className="flex items-center justify-center text-2xl text-[#2ECC71] hover:text-[#27AE60] transition-colors duration-300 hover:underline p-10 min-h-[120px]"
                  >
                    contact@austrc.com
                  </a>
                </div>
              </div>

              {/* Location Section */}
              <div className="mb-12">
                <h3 className="text-2xl mb-4 text-white">Location</h3>
                <div className="bg-gradient-to-r from-[rgba(46,204,113,0.1)] to-transparent border-l-4 border-[#2ECC71] p-10 rounded-lg">
                  <p className="text-gray-300 leading-relaxed">
                    Ahsanullah University of Science and Technology<br />
                    141-142 Love Road, Tejgaon Industrial Area<br />
                    Dhaka-1208, Bangladesh
                  </p>
                </div>
              </div>

              {/* Divider */}
              <div className="my-8 h-px bg-gradient-to-r from-transparent via-[rgba(46,204,113,0.3)] to-transparent" />

              {/* Connect With Us Section */}
              <div>
                <h3 className="text-2xl mb-8 text-center text-white">Connect With Us</h3>

                {/* Social Media Icons */}
                <div className="flex justify-center gap-6 mb-12">
                  {[
                    {
                      name: 'Facebook',
                      icon: <Facebook className="w-8 h-8" />,
                      url: 'https://www.facebook.com/austrc',
                      color: '#1877F2'
                    },
                    {
                      name: 'Instagram',
                      icon: <Instagram className="w-8 h-8" />,
                      url: 'https://www.instagram.com/austrc',
                      color: '#E4405F'
                    },
                    {
                      name: 'LinkedIn',
                      icon: <Linkedin className="w-8 h-8" />,
                      url: 'https://www.linkedin.com/company/austrc',
                      color: '#0A66C2'
                    }
                  ].map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      whileHover={{ scale: 1.1 }}
                      className="relative group"
                    >
                      <div
                        className="absolute inset-0 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-all duration-300"
                        style={{ backgroundColor: `${social.color}40` }}
                      />
                      <div
                        className="relative p-4 rounded-full border transition-all duration-300 bg-black/40 group-hover:shadow-[0_15px_50px_0_rgba(46,204,113,0.6)] backdrop-blur-sm"
                        style={{
                          borderColor: social.color,
                          backgroundColor: `${social.color}20`
                        }}
                      >
                        <div style={{ color: social.color }}>
                          {social.icon}
                        </div>
                      </div>
                    </motion.a>
                  ))}
                </div>

                {/* Email Icon */}
                <div className="flex justify-center">
                  <motion.a
                    href="mailto:contact@austrc.com"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    whileHover={{ scale: 1.1 }}
                    className="relative group"
                  >
                    <div
                      className="absolute inset-0 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-all duration-300"
                      style={{ backgroundColor: '#2ECC7140' }}
                    />
                    <div
                      className="relative p-4 rounded-full border border-[#2ECC71] transition-all duration-300 bg-black/40 group-hover:shadow-[0_15px_50px_0_rgba(46,204,113,0.6)] backdrop-blur-sm"
                      style={{ backgroundColor: '#2ECC7120' }}
                    >
                      <div style={{ color: '#2ECC71' }}>
                        <Mail className="w-8 h-8" />
                      </div>
                    </div>
                  </motion.a>
                </div>
              </div>

              {/* Optional: Keep or remove this CTA based on your preference */}
              {/* <div className="mt-12 text-center">
          <p className="text-xl text-gray-300 mb-6">
            Join us in building the future of robotics!
          </p>
          <Link
            to="/"
            className="inline-block px-8 py-4 bg-gradient-to-r from-[#2ECC71] to-[#27AE60] rounded-lg text-white text-lg hover:shadow-[0_20px_60px_0_rgba(46,204,113,0.8)] transition-all duration-300 hover:scale-105 border border-[rgba(46,204,113,0.3)]"
          >
            Get Started
          </Link>
        </div> */}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Fun Facts / Stats Section */}
      <section className="py-20 relative bg-gradient-to-b from-black via-gray-900 to-black overflow-hidden scroll-mt-20">
        <div className="absolute inset-0">
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#2ECC71] rounded-full blur-[200px] opacity-20"
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid md:grid-cols-4 gap-6 max-w-7xl mx-auto"
          >
            {[
              { number: '2021', label: 'Established' },
              { number: '500+', label: 'Active Members' },
              { number: '50+', label: 'Projects Completed' },
              { number: '100+', label: 'Events Organized' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#2ECC71]/10 to-green-300/5 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300" />
                <div className="relative bg-black/40 backdrop-blur-sm border border-[rgba(46,204,113,0.3)] rounded-2xl p-8 text-center hover:border-[rgba(46,204,113,0.6)] transition-all duration-300 hover:shadow-[0_15px_50px_0_rgba(46,204,113,0.4)] hover:-translate-y-1">
                  <div className="text-4xl md:text-5xl mb-3 bg-gradient-to-r from-[#2ECC71] via-green-400 to-[#27AE60] bg-clip-text text-transparent">
                    {stat.number}
                  </div>
                  <div className="text-gray-400">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden bg-gradient-to-b from-black via-gray-900 to-black">
        <div className="absolute inset-0 bg-gradient-to-br from-[#2ECC71] to-[#27AE60] opacity-10" />
        <div className="absolute inset-0">
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#2ECC71] rounded-full blur-[200px] opacity-20"
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="mb-6 tracking-tight text-white text-5xl">
              Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2ECC71] to-[#27AE60]">Join Us?</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-8">
              Be part of something extraordinary. Join AUSTRC and shape the future of robotics.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                to="/"
                className="relative overflow-hidden bg-gradient-to-r from-[#2ECC71] to-[#27AE60] hover:from-[#27AE60] hover:to-[#2ECC71] text-white shadow-[0_0_40px_0_rgba(46,204,113,0.8)] transition-all duration-300 hover:shadow-[0_0_60px_0_rgba(46,204,113,1)] hover:scale-105 px-8 py-6 text-lg rounded-lg group border border-[rgba(46,204,113,0.3)]"
              >
                <span className="relative z-10">Apply Now</span>
                <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}