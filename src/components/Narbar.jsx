import React from 'react'

//hàm export đầu tiên này phải trùng tên với tên file, là hàm xuất ra một module, để các file khác có thể import và sử dụng.
export const Navbar = () => {
  return (
    //return ==> trả về một giá trị, trong React return thường trả về JSX (JavaScript XML) để hiển thị giao diện. (Hiểu nôm na là return nội dung HTML)
    <div>
        <h1>Navbar</h1>
    </div>
  )
}