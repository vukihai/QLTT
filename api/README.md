# Quản lí thực tập GRAPH API

---

## STUDENT API
/api/student/{student-id}

### GET 
1. GET thông tin STUDENT chung
- GET /api/student/{student-id} ?fields=id, avatar, skype, ...
2. GET thông tin tài khoản
- GET /api/student/{student-id}/my_account (done)
3. GET thông tin tự quản lí
- GET /api/student/{student-id}/profile ?fields=id, avatar, skype, ... (done)
- ?GET giảng viên hướng dẫn
    - GET /api/student/{student-id} ?fields=lecturer
4. GET thông tin nhà trường cấp
- GET /api/student/{student-id}/fixed_info ?fields=hoten, diachi, khoa, nganh, ... (done)
5. GET thông tin kĩ năng nghề nghiệp
- GET /api/student/{student-id}/skill_info
6. GET LIST các bài đăng đã follow
- GET /api/student/{student-id}/follows (done)
7. GET LIST các tin nhắn
- GET /api/student/{student-id}/messages (done)
- GET 1 tin nhắn
    - GET /api/messages/{message-id}
8. ?GET LIST các thông báo
- GET /api/student/{student-id}/notifications
9. GET LIST các bài nộp báo cáo
- GET /api/student/{student-id}/reports (done)
- GET 1 báo cáo
    - GET /api/reports/{report-id}

### PUT
1. Sửa thông tin tự quản lí
- PUT /api/student/{student-id} ?avatar={newAvatarUrl} & ...
2. Đổi mật khẩu (PUT bằng form-url-encoded)
- PUT /api/student/{student-id}/my_account ?password={oldPassword} ?newPassword={newPassword} (done)


### POST
1. Gửi tin nhắn
- POST /api/student/{student-id}/messages ?receiverID={receiver-user-id} & content={message-content} & ...
2. Nộp báo cáo
- POST /api/student/{student-id}/reports ?week={week-time} & content={content} & attachment={attachment-link} & ...
3. ?Đăng kí giảng viên hướng dẫn
- ?POST /api/student/{student-id} ?lecturer={lecturer-id}
- ?POST /api/lecturer/{lecturer-id} ?student={student-id}

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
- PUT /api/partner-post/{post-id} ?content={post-content} & exp={post-expiration-time} & ...

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
- POST /api/partner/{partner-id}/feed ?content={post-content} & exp={post-expiration-time} & ...
2. Cập nhật thông tin của chính partner
- POST /api/partner/{partner-id} ?contact={contact-info} & ...

---

## LECTURER API
/api/lecturer/{lecturer-id}

### GET

1. GET LIST student đang hướng dẫn
- GET /api/lecturer/{lecturer-id}/student-list

---

## BÁO CÁO API
/api/reports/{report-id}

### POST
1. Đăng báo cáo
- POST /api/reports/{report-id} ?attachment={attachment-link} & ...

### GET
1. GET báo cáo
- GET /api/reports/{report-id} ?fields=...

### PUT
1. Sửa báo cáo
- PUT /api/reports/{report-id} ?attachment={attachment-link} & ...

### DELETE
1. Xóa báo cáo
- DELETE /api/reports/{report-id}

---

## MESSAGE API
/api/messages/{message-id}

### POST
1. Đăng báo cáo
- POST /api/messages/{message-id} ?content={content} & ...

### GET
1. GET báo cáo
- GET /api/messages/{message-id} ?fields=content, ...

### PUT
1. Sửa báo cáo
- PUT /api/messages/{message-id} ?content={content} & ...

### DELETE
1. Xóa báo cáo
- DELETE /api/messages/{message-id}