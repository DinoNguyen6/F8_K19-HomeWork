# Day 32: OOP trong TypeScript - Design Patterns cơ bản

## 1. Bài tập ÔP: Hệ thống Quản lý Bán hàng

OOP:
- Đóng gói
- Kế thừa
- Trừu tượng
- Đa hình

class
- Thuộc tính
- constructor
- phương thức

object
- thuộc tính
- phương thức

hàm tạo
- thuộc tính
- phương thức

Xây dựng hệ thống quản lý sản phẩm, khách hàng và đơn hàng. Toàn bộ code đặt trong thư mục 'src'.

### 1.1. Model: Product

```typescript
// FILE: src/models/Product.ts
export class Product (
    private _id: string;
    private _name: string;
    private _price: number;
    private _stock: number;
) {}

get id(): string {
    return this._id;
}