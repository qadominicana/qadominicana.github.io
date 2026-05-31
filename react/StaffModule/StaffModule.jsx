import { useState, useRef, useEffect, useCallback } from 'react';
import styles from './StaffModule.module.css';
import { staffData } from './staff-data';

const IconLinkedIn = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const IconX = () => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.747l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

function ExpandedCard({ member, onMouseEnter, onMouseLeave }) {
  return (
    <div
      className={styles.expanded}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      role="dialog"
      aria-modal="true"
      aria-label={`Perfil de ${member.name}`}
    >
      <div className={styles.expandedAvatarWrapper}>
        <img
          src={member.avatar}
          alt={`Foto de ${member.name}`}
          className={styles.expandedAvatar}
        />
      </div>

      <h2 className={styles.expandedName}>{member.name}</h2>
      <span className={styles.expandedRole}>{member.role}</span>
      <div className={styles.divider} aria-hidden="true" />
      <p className={styles.expandedBio}>{member.bio}</p>

      {(member.linkedin || member.twitter) && (
        <div className={styles.social}>
          {member.linkedin && (
            <a
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
              aria-label={`LinkedIn de ${member.name}`}
            >
              <IconLinkedIn />
            </a>
          )}
          {member.twitter && (
            <a
              href={member.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
              aria-label={`X / Twitter de ${member.name}`}
            >
              <IconX />
            </a>
          )}
        </div>
      )}

      <p className={styles.closeHint}>ESC o click fuera para cerrar</p>
    </div>
  );
}

function StaffCard({ member, onMouseEnter, onMouseLeave, isActive }) {
  return (
    <article
      className={`${styles.card} ${isActive ? styles.cardActive : ''}`}
      onMouseEnter={() => onMouseEnter(member)}
      onMouseLeave={onMouseLeave}
      tabIndex={0}
      role="button"
      aria-label={`Ver perfil de ${member.name}, ${member.role}`}
      aria-expanded={isActive}
    >
      <div className={styles.avatarWrapper}>
        <img
          src={member.avatar}
          alt={`Foto de ${member.name}`}
          className={styles.avatar}
          loading="lazy"
        />
      </div>
      <div className={styles.cardBody}>
        <h3 className={styles.name}>{member.name}</h3>
        <span className={styles.roleBadge}>{member.role}</span>
        <p className={styles.bio}>{member.bio}</p>
      </div>
    </article>
  );
}

export default function StaffModule() {
  const [expanded, setExpanded] = useState(null);
  const timerRef = useRef(null);

  const cancelClose = useCallback(() => clearTimeout(timerRef.current), []);

  const scheduleClose = useCallback(() => {
    timerRef.current = setTimeout(() => setExpanded(null), 130);
  }, []);

  const handleCardEnter = useCallback((member) => {
    cancelClose();
    setExpanded(member);
  }, [cancelClose]);

  const handleOverlayClick = useCallback(() => {
    cancelClose();
    setExpanded(null);
  }, [cancelClose]);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') {
        cancelClose();
        setExpanded(null);
      }
    };
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('keydown', onKey);
      clearTimeout(timerRef.current);
    };
  }, [cancelClose]);

  return (
    <section className={styles.section}>
      <header className={styles.header}>
        <h2 className={styles.title}>Nuestro Equipo</h2>
        <p className={styles.subtitle}>Conoce a los profesionales detrás de la comunidad</p>
      </header>

      <div className={styles.grid} role="list">
        {staffData.map((member) => (
          <StaffCard
            key={member.id}
            member={member}
            onMouseEnter={handleCardEnter}
            onMouseLeave={scheduleClose}
            isActive={expanded?.id === member.id}
          />
        ))}
      </div>

      {expanded && (
        <>
          <div
            className={styles.overlay}
            onClick={handleOverlayClick}
            aria-hidden="true"
          />
          <ExpandedCard
            member={expanded}
            onMouseEnter={cancelClose}
            onMouseLeave={scheduleClose}
          />
        </>
      )}
    </section>
  );
}
