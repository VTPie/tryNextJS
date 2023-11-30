# Routing

- Routing trong NextJS dựa trên hệ thống folder trong thư mục 'app'.
- Mỗi folder đại diện cho 1 route segment của ứng dụng. Có thể tạo nested route bằng cách tạo thêm các folder con trong folder chính.
- 1 route segment có thể truy cập được chỉ khi folder tương ứng có chứa file page.js. Nếu không, folder này có thể dùng để lưu trữ components, styles, images, ...
- Route group: Ngăn 1 folder được đưa vào route. Mang ý nghĩa chính là tổ chức lại cấu trúc file.
  - Cú pháp: (folderName)
  - Chức năng:
    - Gộp các route segment thành 1 nhóm.
    - Gộp các route segment vào 1 layout chung.
    - Tạo nhiều root layout, nhiều root layout gây reload lại trang.
- Dynamic Routing:
  - Trường hợp sử dụng: sử dụng khi chưa biết đường dẫn sắp tới sẽ là gì nên không thể đặt tên folder được.
  - Cách sử dụng: tạo 1 folder tạm với tên [folderName], tên folder sẽ được truyền vào từ URL thực tế.
  - [folderName]: match với chỉ 1 segment được truyền vào ngay sau segment hiện tại.
  - [...folderName]: match với tất cả segment được truyền vào ngay sau segment hiện tại.
  - [[...folderName]]: match với tất cả segment được truyền vào ngay sau segment hiện tại và rỗng.

# Special file

- Page.js dùng để xác định UI cho duy nhất 1 route.
- Layout.js dùng để chia sẻ UI cho nhiều page khác nhau.
- Template.js tương tự như Layout, tuy nhiêu có 1 vài sự khác biệt ...
- Loading.js dùng để thiết kế UI Loading cho các màn hình, UI này sẽ tự động lồng vào layout cùng cấp và bọc các page hoặc phần tử nào nằm trong <Suspense>.

# Navigating

- Sử dụng <Link>: phiên bản nâng cấp của <a>, được bổ sung thêm chức năng không reload lại trang (preventdefault).
- Sử dụng useRouter: đi kèm với tag 'use client'.

# Styling

- CSS Modules: Cho phép sử dụng cùng 1 css class cho 1 element mà không lo về sự xung đột.

# Streaming

- Là quá trình chia page thành các đoạn hơn, các đoạn này sẽ được render theo thứ tự và gửi dần dần từ server về client.
  - Cho phép các phần cần thiết của trang sẽ được hiển thị sớm hơn mà không cần phải đợi server gửi về dữ liệu của toàn bộ trang.
