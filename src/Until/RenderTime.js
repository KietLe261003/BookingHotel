export const renderTime=(isoString)=> {
    try {
      // Chuyển chuỗi ISO 8601 thành đối tượng Date
      const date = new Date(isoString);
  
      // Kiểm tra nếu chuỗi ISO không hợp lệ
      if (isNaN(date.getTime())) {
        throw new Error("Invalid date format");
      }
  
      // Lấy thông tin ngày, tháng, năm, giờ, phút
      const day = date.getDate().toString().padStart(2, "0");
      const month = (date.getMonth() + 1).toString().padStart(2, "0"); // Tháng bắt đầu từ 0
      const year = date.getFullYear();
  
      const hours = date.getHours().toString().padStart(2, "0");
      const minutes = date.getMinutes().toString().padStart(2, "0");

      return `${day}/${month}/${year} ${hours}:${minutes}`;
    } catch (error) {
      console.error("Error formatting date:", error.message);
      return "Invalid date";
    }
  }
  