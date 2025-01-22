import React from "react";
// props children : properti yang dipakai untuk menampilkan komponen anak (children) kedalamman komponen induk(parent)
// contoh ini Card adalah komponen parent sebagai wrapper
// children adalah kkompoen yang ada dalam komponen parent <Card>{Komponen children}</Card>
const Card = ({ children, CardClassname }) => {
  return <div className={`bg-white rounded-lg shadow w-[300px] ${CardClassname}`}>{children}</div>;
};

export default Card;
