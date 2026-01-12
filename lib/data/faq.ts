export type FAQItem = {
  question: string;
  answer: string;
};

export const faqData: FAQItem[] = [
  {
    question: 'Mua Antigravity thì cần lưu ý gì?',
    answer:
      'Trước khi mua, bạn cần check mail và thử đăng nhập vào Antigravity trước. Nếu login được thì mới tiến hành add vào family plan.',
  },
  {
    question: 'Google AI Pro hay Ultra cho Antigravity?',
    answer:
      'Pro (300k/năm slot family) có thể bị limit lúc được lúc không. Ultra (1tr9/năm) ít bị limit hơn, kèm 30TB Drive dùng chung. Nếu dùng Antigravity nhiều, khuyên chọn Ultra để không lo về limit.',
  },
  {
    question: 'Antigravity tính tín dụng như thế nào?',
    answer:
      'Antigravity không tính theo tín dụng, mà tính theo quota. Google chưa công bố số liệu cụ thể. Riêng 6k tín dụng/tháng/người là cho Veo3 (tạo video, ảnh AI) - không liên quan Antigravity.',
  },
  {
    question: 'Add family là gì? Tối đa bao nhiêu người?',
    answer:
      'Add family = được thêm vào nhóm gia đình của gói Premium. Tối đa 5 người, tất cả đều dùng được đầy đủ tính năng của gói (Gemini Pro/Ultra, Drive, v.v.).',
  },
  {
    question: 'Gói "cấp" nghĩa là gì?',
    answer:
      'Gói cấp = bạn được cấp nguyên account, đổi pass thoải mái, là chủ family (owner). Bạn có thể add thêm 5 người khác vào (vợ/chồng, bạn bè...) tuỳ ý.',
  },
  {
    question: 'BHF và KBH nghĩa là gì?',
    answer: 'BHF = Bảo hành full (đổi mới nếu có vấn đề). KBH = Không bảo hành (giá rẻ hơn, phù hợp dùng thử).',
  },
  {
    question: 'Tài khoản chính chủ khác gì slot gia đình?',
    answer: 'Chính chủ = bạn là owner, toàn quyền. Slot gia đình = được add vào family plan, dùng đầy đủ tính năng nhưng không phải owner.',
  },
  {
    question: 'Mình có thể dùng thử trước không?',
    answer: 'Một số gói có trial/slot ngắn hạn. Inbox mình check từng case cụ thể nhé!',
  },
  {
    question: 'Thanh toán như thế nào?',
    answer: 'Chuyển khoản ngân hàng / Momo / ZaloPay. Nhận account ngay sau khi confirm.',
  },
  {
    question: 'Có hỗ trợ setup không?',
    answer: 'Có! Mình guide bạn từ A-Z, đặc biệt với Cursor, Antigravity, ChatGPT Team.',
  },
  {
    question: 'Mua combo nhiều tool có giảm giá không?',
    answer: 'Có giá ưu đãi cho combo. Inbox để mình báo giá đẹp nhất!',
  },
];
