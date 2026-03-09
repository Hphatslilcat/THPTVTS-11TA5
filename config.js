// config.js
const letterConfig = {
    // Names that trigger specific messages
    specialNames: ["test1", "test2", "test3"],

    // Specific letters for special names
    custom: {
        "test1": { sender: "Lilcat", message: "Gửi Linh, chúc bạn luôn vui vẻ và đạt được mọi ước mơ!" },
        "test2": { sender: "Lilcat", message: "Gửi Trang, chúc bạn ngày 8/3 tràn ngập niềm vui!" },
        "test3": { sender: "Lilcat", message: "Gửi Mai, một ngày 8/3 thật ấm áp nhé!" }
    },

    // Random letters for everyone else
    default: [
        { sender: "Lilcat", message: ["Chúc bạn một ngày 8/3 thật ý nghĩa!", "Hãy luôn tỏa sáng nhé!"] },
        { sender: "Lilcat", message: ["Happy Women's Day!", "Chúc bạn luôn xinh đẹp và hạnh phúc."] }
    ],

    // Random openings (use {name} as a placeholder)
    openings: [
        "Chúc mừng ngày 8/3, {name}!",
        "Dành cho một người đặc biệt là {name},",
        "Gửi tới bông hoa rạng rỡ nhất mang tên {name},",
        "Chào ngày 8/3 xinh đẹp nhé {name},"
    ]
};