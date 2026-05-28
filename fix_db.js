const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./bepviet.db');

db.serialize(() => {
    // Bước 1: Xóa cái danh mục "Nước pha chế khác" đẻ thừa ra trước để giải phóng tên
    db.run("DELETE FROM Categories WHERE name = 'Nước pha chế khác'");
    
    // Bước 2: Đường đã quang, giờ mới đổi tên thằng "Khác" thành tên mới
    db.run("UPDATE Categories SET name = 'Nước pha chế khác' WHERE name = 'Khác'", function(err) {
        if (err) {
            console.log("❌ Vẫn còn lỗi:", err.message);
        } else {
            console.log("✅ Đã phẫu thuật thành công 100%! Lỗi đã bị tiêu diệt.");
        }
    });
});