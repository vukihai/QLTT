# Quản lí thực tập GRAPH API

---

## STUDENT API
/api/student/<student-id>

---

## STUDENT API
### GET 

GET thông tin tự quản lí
- GET /api/student/<student-id> ?fields=id, avatar, skype, ...
GET thông tin nhà trường cấp
- GET /api/student/<student-id>/fixed ?fields=hoten, diachi, khoa, nganh, ...
GET LIST các bài đăng đã follow
- GET /api/student/<student-id>/follow
GET LIST các tin nhắn
- GET /api/student/<student-id>/messages
GET LIST các thông báo
- GET /api/student/<student-id>/notifications
GET LIST các bài nộp báo cáo
- GET /api/student/<student-id>/reports
?GET giảng viên hướng dẫn
- GET /api/student/<student-id> ?fields=lecturer

---

## STUDENT API
### PUT
Sửa thông tin tự quản lí
- PUT /api/student/<student-id> ?avatar="<newAvatarUrl>"& ...
Đổi mật khẩu
- PUT /api/student/<student-id> ?password="<newPassword>"
---

## STUDENT API
### POST
Gửi tin nhắn
- POST /api/student/<student-id>/messages ?receiverID="<receiver-user-id>" & content="<message-content>", ...
Nộp báo cáo
- POST /api/student/<student-id>/reports ?content="<content>" & attachment="<attachment-link>"
?Đăng kí giảng viên hướng dẫn
- POST /api/student/<student-id> ?lecturer="<lecturer-id>"
---

## BÀI ĐĂNG API
/api/partner-post/<post-id>