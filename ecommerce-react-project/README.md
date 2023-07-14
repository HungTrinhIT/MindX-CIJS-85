## Project Thương mại điện tử

---
##### Component Tree
```
<Ecommerce>
    <ProductFilter/>
    <ProductList>
        <Product/>
        <Product/>
        <Product/>
        <Product/>
        ...
    <ProductList/>        
    <Cart>
        <CartItem> => Button xoá
                   => Button tăng/giảm số lượng
    </CartItem>
<Ecommerce/>    
```
----
State Management

###### Ecommerce

- `[productList, setProductList]=useState([...])`
- `[cart, setCart]= useState([])`


---

1. Render danh sách sản phẩm (`<Product/>`)

2. Thêm sản phẩm vào giỏ hàng
    
    - Bắt được sự kiện onClick => `productId` => `eventUp` => Cha
    - Ở cha (`Ecommerce` component) => tạo `function` xử lý
    - Tìm kiếm sản phần đang cần thêm ở trong giỏ hàng (`cart`)
    - Có 2 trường hợp:
        - Đã tồn tại: cập nhật `quantity`
        - Chưa tồn tại: Tạo mới với `quantity` bằng `1`

3. Render list sản phẩm trong giỏ hàng
4. Xoá sản phẩm khỏi giỏ hàng
    - Lấy id
    - Event up
    - Xử lý logic: `filter` => cập nhật lại state

5. Tăng/Giảm quantity
6. Filter theo Size