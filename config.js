// config.js

window.letterConfig = {

    // Names that trigger special messages
    // Note: The code is case-insensitive, so "Linh" or "linh" both work.
    specialNames: [
        "Linh",
        "Trang",
        "Mai"
    ],

    // Special letters for specific people
    custom: {
        "Linh": {
            sender: "Lilcat 🐱",
            message: [
                "Gửi {name} thân mến,",
                "Nhân ngày 8/3, chúc {name} luôn vui vẻ, hạnh phúc và đạt được thật nhiều điều tuyệt vời trong cuộc sống.",
                "Hy vọng mỗi ngày của {name} đều tràn ngập tiếng cười và những điều tốt đẹp nhất.",
                "Cảm ơn {name} vì đã luôn là một người bạn tuyệt vời!"
            ]
        },

        "Trang": {
            sender: "Lilcat 🐱",
            message: [
                "Gửi {name},",
                "Chúc {name} một ngày 8/3 thật rực rỡ và tràn đầy niềm vui bên gia đình và bạn bè nhé.",
                "Mong rằng mọi ước mơ của {name} sẽ dần trở thành hiện thực trong năm nay.",
                "Hãy luôn tự tin và tỏa sáng theo cách riêng của mình nhé {name}!"
            ]
        },

        "Mai": {
            sender: "Lilcat 🐱",
            message: [
                "Gửi {name} dễ thương,",
                "Chúc {name} có một ngày 8/3 thật ấm áp và nhận được thật nhiều quà nha.",
                "Hy vọng {name} sẽ luôn giữ được nụ cười xinh và nguồn năng lượng tích cực này.",
                "Chúc {name} học tốt, sống vui và luôn gặp nhiều may mắn trên con đường sắp tới!"
            ]
        }
    },

    // Letters for everyone else (randomly selected)
    default: [
        {
            sender: "Nam 11TA5 🦾",
            message: [
                "Thay mặt các bạn nam 11TA5, chúc {name} một ngày 8/3 thật rực rỡ.",
                "Cảm ơn {name} đã là một mảnh ghép tuyệt vời của lớp mình.",
                "Chúc {name} luôn xinh đẹp, học giỏi và mãi là niềm tự hào của 11TA5 nhé!"
            ]
        },
        {
            sender: "Nam 11TA5 🦾",
            message: [
                "Chúc {name} hôm nay nhận được 'cơn mưa' quà và những lời chúc ngọt ngào nhất nhé.",
                "Mong {name} luôn giữ vững phong độ, thi cử đỗ đạt và luôn tràn đầy niềm vui.",
                "Hôm nay {name} là nhất, hội con trai không ai dám tranh giành đâu!"
            ]
        },
        {
            sender: "Gia Khanhs",
            message: [
                "Chúc {name} một Ngày Quốc tế Phụ nữ 8/3 thật sự ý nghĩa.",
                "Chúc {name} luôn xinh đẹp, tự tin và tràn đầy năng lượng mỗi khi đến lớp.",
                "Mong rằng {name} sẽ luôn hạnh phúc và nhận được thật nhiều yêu thương từ mọi người.",
                "Chúc {name} đạt được thật nhiều điểm cao và thành công trong mọi dự định!"
            ]
        },
        {
            sender: "Một người bí mật 🌸",
            message: [
                "Có thể {name} không biết, nhưng trong mắt mọi người, {name} thật sự rất tuyệt vời.",
                "Chúc {name} luôn hạnh phúc và gặp nhiều điều may mắn trong cuộc sống.",
                "Chúc mừng ngày 8/3 nhé {name}!"
            ]
        },
        {
            sender: "Lilcat 🐱",
            message: [
                "Mỗi người con gái đều giống như một bông hoa, và {name} cũng vậy.",
                "Hy vọng {name} sẽ luôn nở rực rỡ và mang lại niềm vui cho mọi người xung quanh.",
                "Chúc {name} có một ngày 8/3 tuyệt vời nhất từ trước đến nay!"
            ]
        }
    ],

    // Random opening lines that appear above the message
    openings: [
        "Chúc mừng ngày 8/3, {name}!",
        "Dành cho một người đặc biệt mang tên {name},",
        "Gửi tới bông hoa rạng rỡ nhất hôm nay là {name},",
        "Một lời chúc nhỏ gửi đến {name},",
        "Chào ngày 8/3 thật xinh đẹp nhé {name},",
        "Tới {name}, người tuyệt vời của ngày hôm nay,",
        "Một chút yêu thương gửi đến {name},",
        "Hôm nay là ngày đặc biệt dành cho {name},"
    ]
};
