import {
  FaXTwitter,
  FaThreads,
  FaInstagram,
  FaCopyright,
  FaHeart
} from 'react-icons/fa6';

import {
  BsInstagram, BsTwitterX
} from 'react-icons/bs'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__copy">
        <span className="footer__copy-main">
          <FaCopyright size={13} />
          <span className="footer__wordmark">
            <span className="footer__wordmark-daily">Daily</span>
            <span className="footer__wordmark-diff">Diff</span>
            <span className="footer__wordmark-tld">.dev</span>
          </span>
          <strong>· 2026</strong>
        </span>
        <span className="footer__copy-sub">
          Made with <FaHeart size={15} className="footer__heart" /> in India
        </span>
      </div>
      <div className="footer__socials">
        <a className="footer__link" href="https://tally.so/r/KYkpWz" target="_blank" rel="noopener noreferrer">
          Leave Feedback
        </a>

        <a href='https://x.com/getdailydiff' target="_blank" rel="noopener noreferrer" aria-label="DailyDiff on X">
          <BsTwitterX size={14} />
        </a>
        {/* <BsInstagram /> */}
      </div>
    </footer>
  );
}
