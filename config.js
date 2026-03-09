// config.js

// 1. Define the shared messages FIRST (outside the main object)
const messageForGirls11TA5 = [
    {
        sender: "Hội Con Trai 11TA5",
        message: [
            "Gửi những bông hoa xinh đẹp nhất của tập thể 11TA5,",
            "Hôm nay là ngày của các bạn! Thay mặt cánh mày râu trong lớp, tụi mình chúc các bạn luôn rạng rỡ, tự tin và luôn là 'linh hồn' của lớp mình nhé.",
            "Cảm ơn các bạn đã luôn cùng tụi mình tạo nên những kỷ niệm học sinh thật đáng nhớ.",
            "Chúc các bạn 8/3 ngập tràn quà, hoa và những điểm 10 chói lọi!"
        ]
    },
    {
        sender: "Lilcat 🐱",
        message: [
            "Skibidi! Gửi lời chào đến những cô gái tuyệt vời lớp 11TA5,",
            "Chúc tập thể nữ 11TA5 luôn đoàn kết, mãi xinh tươi và đạt được mọi nguyện vọng nhé!",
            "Hãy cùng nhau tận hưởng một ngày 8/3 thật trọn vẹn và hạnh phúc!"
        ]
    },
    {
        sender: "Gia Khanhs",
        message: [
            "Chúc các bạn nữ lớp 11TA5 một Ngày Quốc tế Phụ nữ 8/3 thật vui vẻ.",
            "Chúc các bạn luôn xinh đẹp, tự tin và tràn đầy năng lượng mỗi ngày.",
            "Mong rằng các bạn sẽ luôn hạnh phúc và nhận được thật nhiều yêu thương.",
            "Chúc các bạn đạt được thật nhiều điểm cao và thành công trong học tập."
        ]
    }
];

// 2. Now define the main config object
window.letterConfig = {

    specialNames: ["Tập Thể Nữ 11TA5", "11TA5", "Cả lớp", "Mấy bà 11TA5", "test1"],

    custom: {
        // Individual secrets
        "test1": [
            {
                sender: "Lilcat 🐱",
                message: [
                    "Đây là tin nhắn bí mật số 1 dành cho {name}!",
                    "Chúc bạn một ngày 8/3 thật tuyệt vời."
                ]
            },
            {
                sender: "Lilcat 🐱",
                message: [
                    "Bất ngờ chưa {name}! Đây là tin nhắn số 2.",
                    "Hy vọng bạn thấy vui!"
                ]
            }
        ],
        
        // Point all group names to the shared variable defined above
        "Tập Thể Nữ 11TA5": messageForGirls11TA5,
        "11TA5": messageForGirls11TA5,
        "Cả lớp": messageForGirls11TA5,
        "Mấy bà 11TA5": messageForGirls11TA5
    },

    default: [
        {
            sender: "Nam 11TA5",
            message: [
                "Thay mặt các bạn nam 11TA5, chúc {name} một ngày 8/3 thật rực rỡ.",
                "Cảm ơn {name} đã là một mảnh ghép tuyệt vời của lớp mình.",
                "Chúc {name} luôn xinh đẹp, học giỏi và mãi là niềm tự hào của 11TA5 nhé!"
            ]
        },
        {
            sender: "Nam 11TA5",
            message: [
                "Chúc {name} hôm nay nhận được 'cơn mưa' quà và những lời chúc ngọt ngào nhất nhé.",
                "Mong {name} luôn giữ vững phong độ, thi cử đỗ đạt và luôn tràn đầy niềm vui."
            ]
        },
        {
            sender: "Gia Khanhs",
            message: [
                "Chúc {name} một Ngày Quốc tế Phụ nữ 8/3 thật sự ý nghĩa.",
                "Chúc {name} luôn xinh đẹp, tự tin và tràn đầy năng lượng mỗi khi đến lớp."
            ]
        },
        {
            sender: "Một người bí mật 🌸",
            message: [
                "Có thể {name} không biết, nhưng trong mắt mọi người, {name} thật sự rất tuyệt vời.",
                "Chúc {name} luôn hạnh phúc và gặp nhiều điều may mắn."
            ]
        },
        {
            sender: "Lilcat 🐱",
            message: [
                "Mỗi người con gái đều giống như một bông hoa, và {name} cũng vậy.",
                "Hy vọng {name} sẽ luôn nở rực rỡ và mang lại niềm vui cho mọi người!"
            ]
        }
    ],

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
