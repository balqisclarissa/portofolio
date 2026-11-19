
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";
import { navigation } from "../data/navigation";

function RadialMenu() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) =>
              b.intersectionRatio - a.intersectionRatio
          );

        if (visible[0]) {
          setActive(visible[0].target.id);
        }
      },
      {
        rootMargin: "-25% 0px -45% 0px",
        threshold: [0, 0.2, 0.5]
      }
    );

    navigation.forEach((item) => {
      const element = document.getElementById(item.id);

      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!open) return;

    const handleKey = (event) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    window.addEventListener("keydown", handleKey);

    return () => {
      window.removeEventListener("keydown", handleKey);
    };
  }, [open]);

  const navigate = (id) => {
    setOpen(false);

    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth"
    });
  };

  const radius =
    window.innerWidth <= 600 ? 105 : 155;

  return (
    <>
      <AnimatePresence>
        {open && (
          <motion.div
            className="radial-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
          />
        )}
      </AnimatePresence>

      <nav className="radial-root" aria-label="Main navigation">

        <AnimatePresence>
          {open &&
            navigation.map((item, index) => {
              const Icon = item.icon;

              const radians =
                item.angle * Math.PI / 180;

              const x = Math.cos(radians) * radius;
              const y = Math.sin(radians) * radius;

              return (
                <motion.button
                  key={item.id}
                  className={`radial-node ${
                    active === item.id ? "active" : ""
                  }`}
                  initial={{
                    opacity: 0,
                    x: 0,
                    y: 0,
                    scale: 0.3
                  }}
                  animate={{
                    opacity: 1,
                    x,
                    y,
                    scale: 1
                  }}
                  exit={{
                    opacity: 0,
                    x: 0,
                    y: 0,
                    scale: 0.3
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 20,
                    delay: index * 0.045
                  }}
                  onClick={() => navigate(item.id)}
                  aria-label={item.label}
                  title={item.label}
                >
                  <Icon size={20} />

                  <span className="radial-tooltip">
                    {item.label}
                  </span>
                </motion.button>
              );
            })}
        </AnimatePresence>

        <motion.button
          className="radial-trigger"
          onClick={() => setOpen(!open)}
          animate={{ rotate: open ? 135 : 0 }}
          whileTap={{ scale: 0.9 }}
          aria-label="Toggle navigation"
          aria-expanded={open}
        >
          {open ? <X size={25} /> : <Menu size={25} />}
        </motion.button>

        {!open && (
          <span className="radial-hint">MENU</span>
        )}

      </nav>
    </>
  );
}

export default RadialMenu;
