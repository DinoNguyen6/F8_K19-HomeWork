Câu 1: Selector nào có độ ưu tiên cao nhất trong CSS?
- Inline style (style trực tiếp trên phần tử) có độ ưu tiên cao nhất, sau đó là ID selector (#id), class selector (.class), và cuối cùng là element selector (element). Cụ thể, thứ tự ưu tiên từ cao đến thấp là: inline style > ID selector > class selector > element selector.

Câu 2: Nếu một phần tử HTML có cả h1, .title, và #main cùng set color — selector nào thắng? Tại sao?
- #main thang
- Việc thắng của #main là do nó là ID selector

Câu 3: Nếu bạn thêm style="color: pink" trực tiếp vào phần tử ở Câu 2, kết quả thay đổi như thế nào?
- Phan tu sẽ có màu hồng

Câu 4: Tại sao theme.css có thể override style từ base.css? Điều kiện để override thành công là gì?
- Vi base.css duoc ghi truoc theme.css. Dieu kien de thanh cong la theme.css phai ghi sau base.css khi do trang load sex chay base.css roi chay theme.css nen base.css se bij theme ghi de.

Câu 5: Trong project của bạn, có hai phần tử đều dùng class .title nhưng hiển thị màu khác nhau. Giải thích tại sao.
- Hai phần tử có thể có màu khác nhau do chúng bị ảnh hưởng bởi các selector khác nhau. Ví dụ, một phần tử có thể bị ảnh hưởng bởi một ID selector hoặc một inline style có độ ưu tiên cao hơn class selector, trong khi phần tử kia chỉ bị ảnh hưởng bởi class selector. Ngoài ra, nếu một phần tử nằm trong một container có style riêng, nó cũng có thể bị ảnh hưởng bởi style của container đó.

Câu 6: Phần tử nào trong project của bạn có CSS phức tạp nhất? Liệt kê các selector tác động lên nó và giải thích selector nào thắng cuối cùng.
- Phần tử có CSS phức tạp nhất trong project của tôi là phần tử có ID #main. Các selector tác động lên nó bao gồm: 
  1. Element selector (h1)
  2. Class selector (.title)
  3. ID selector (#main)
  4. Inline style (style="color: pink")
- Selector thắng cuối cùng là inline style (style="color: pink") vì nó có độ ưu tiên cao nhất trong CSS, vượt qua cả ID selector và class selector.