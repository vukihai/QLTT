# Quản lí thực tập GRAPH API

---

## STUDENT API
/api/student/{student-id}

### GET 

1. GET thông tin tự quản lí
- GET /api/student/{student-id} ?fields=id, avatar, skype, ...
- ?GET giảng viên hướng dẫn
    - GET /api/student/{student-id} ?fields=lecturer
2. GET thông tin nhà trường cấp
- GET /api/student/{student-id}fixed-info ?fields=hoten, diachi, khoa, nganh, ...
3. GET thông tin kĩ năng nghề nghiệp
- GET /api/student/{student-id}/skill-info
4. GET LIST các bài đăng đã follow
- GET /api/student/{student-id}/follow
5. GET LIST các tin nhắn
- GET /api/student/{student-id}/messages
- GET 1 tin nhắn
    - GET /api/student/{student-id}/messages/{message-id}
6. ?GET LIST các thông báo
- GET /api/student/{student-id}/notifications
7. GET LIST các bài nộp báo cáo
- GET /api/student/{student-id}/reports
- GET 1 báo cáo
    - GET /api/student/{student-id}/reports/{report-id}

### PUT
1. Sửa thông tin tự quản lí
- PUT /api/student/{student-id} ?avatar="{newAvatarUrl}" & ...
2. Đổi mật khẩu
- PUT /api/student/{student-id} ?password="{newPassword}"


### POST
1. Gửi tin nhắn
- POST /api/student/{student-id}/messages ?receiverID="{receiver-user-id}" & content="{message-content}" & ...
2. Nộp báo cáo
- POST /api/student/{student-id}/reports ?week="{week-time}" & content="{content}" & attachment="{attachment-link}" & ...
3. ?Đăng kí giảng viên hướng dẫn
- ?POST /api/student/{student-id} ?lecturer="{lecturer-id}"
- ?POST /api/lecturer/{lecturer-id} ?student="{student-id}"

---

## BÀI ĐĂNG API
/api/partner-post/{post-id}


### GET
1. GET bài đăng
- GET /api/partner-post/{post-id} ?fields=content, partnerID, ...
2. GET LIST sinh viên Follow
- GET /api/partner-post/{post-id}/follow

### PUT

1. Cập nhật bài đăng
- POST /api/partner-post/{post-id} ?content="{post-content}" & exp="{post-expiration-time}" & ...

---

## PARTNER API
/api/partner/{partner-id}

### GET 

1. GET LIST các bài đăng
- GET /api/partner/{partner-id}/feed
2. GET thông tin của chính partner
- GET /api/partner/{partner-id} ?fields=contact, ...

### POST

1. Gửi bài đăng mới
- POST /api/partner/{partner-id}/feed ?content="{post-content}" & exp="{post-expiration-time}" & ...
2. Cập nhật thông tin của chính partner
- POST /api/partner/{partner-id} ?contact="{contact-info}" & ...

