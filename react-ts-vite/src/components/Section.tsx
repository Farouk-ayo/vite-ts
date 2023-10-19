// then in the previous version
// import React from "react";

// export const Section: React.FC<{ title: string }> = ({ children, title }) => {
//   return (
//     <section>
//       <h2>{title}</h2>
//       <p>{children}</p>
//     </section>
//   );
// };

import { ReactNode } from "react";

type SectionProps = {
  title?: string;
  children: ReactNode;
};

export const Section = ({
  children,
  title = "my subheading",
}: SectionProps) => {
  return (
    <section>
      <h2>{title}</h2>
      <p>{children}</p>
    </section>
  );
};
