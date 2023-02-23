const linkedInSVG = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="fill-primary w-10 hover:fill-accented-low"
    viewBox="0 0 24 24"
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M12 9.55C12.917 8.613 14.111 8 15.5 8a5.5 5.5 0 0 1 5.5 5.5V21h-2v-7.5a3.5 3.5 0 0 0-7 0V21h-2V8.5h2v1.05zM5 6.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm-1 2h2V21H4V8.5z" />
  </svg>
);
const emailSVG = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    className="fill-primary w-10 hover:fill-accented-low"
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm17 4.238l-7.928 7.1L4 7.216V19h16V7.238zM4.511 5l7.55 6.662L19.502 5H4.511z" />
  </svg>
);
const telegramSVG = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="fill-primary w-10 hover:fill-accented-low"
    viewBox="0 0 24 24"
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm0 2C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-3.11-8.83l-2.498-.779c-.54-.165-.543-.537.121-.804l9.733-3.76c.565-.23.885.061.702.79l-1.657 7.82c-.116.557-.451.69-.916.433l-2.551-1.888-1.189 1.148c-.122.118-.221.219-.409.244-.187.026-.341-.03-.454-.34l-.87-2.871-.012.008z" />
  </svg>
);

export const contacts = [
  {
    title: "linkedin",
    url: "https://www.linkedin.com/in/shubham-satyawali-815550170/",
    svg: linkedInSVG,
    openInNewPage: true,
  },
  {
    title: "email",
    url: "shubham.satyawali.05@gmail.com",
    svg: emailSVG,
    openInNewPage: false,
  },
  {
    title: "telegram",
    url: "https://t.me/shubham_satyawali",
    svg: telegramSVG,
    openInNewPage: true,
  },
];
