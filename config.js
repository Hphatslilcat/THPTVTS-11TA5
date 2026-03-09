// config.js

// 1. Định nghĩa danh sách tin nhắn dùng chung cho tập thể
const messageForGirls11TA5 = [
    {
        opening: "Gửi tới tập thể nữ 11TA5 thân yêu,",
        sender: "Hội Con Trai 11TA5",
        message: [
            "Gửi những bông hoa xinh đẹp nhất của tập thể 11TA5,",
            "Hôm nay là ngày của các bạn! Thay mặt cánh mày râu trong lớp, tụi mình chúc các bạn luôn rạng rỡ, tự tin và luôn là 'linh hồn' của lớp mình nhé.",
            "Cảm ơn các bạn đã luôn cùng tụi mình tạo nên những kỷ niệm học sinh thật đáng nhớ.",
            "Chúc các bạn 8/3 ngập tràn quà, hoa và những điểm 10 chói lọi!"
        ]
    },
    {
        opening: "Chào những cô gái tuyệt vời của 11TA5,", 
        sender: "Lilcat 🐱",
        message: [
            "Skibidi! Gửi lời chào đến những cô gái tuyệt vời lớp 11TA5,",
            "Chúc tập thể nữ 11TA5 luôn đoàn kết, mãi xinh tươi và đạt được mọi nguyện vọng nhé!",
            "Hãy cùng nhau tận hưởng một ngày 8/3 thật trọn vẹn và hạnh phúc!"
        ]
    },
    {
        opening: "Gửi ngàn lời chúc tốt đẹp đến các bạn nữ 11TA5,",
        sender: "Gia Khanhs",
        message: [
            "Chúc các bạn nữ lớp 11TA5 một Ngày Quốc tế Phụ nữ 8/3 thật vui vẻ.",
            "Chúc các bạn luôn xinh đẹp, tự tin và tràn đầy năng lượng mỗi ngày.",
            "Mong rằng các bạn sẽ luôn hạnh phúc và nhận được thật nhiều yêu thương.",
            "Chúc các bạn đạt được thật nhiều điểm cao và thành công trong học tập."
        ]
    },
    {
        opening: "Hỡi các công chúa của 11TA5,",
        sender: "Thanh Tuấn",
        message: [
            "Nhân dịp 8/3, mình xin chúc tất cả các bạn nữ luôn xinh đẹp, dễ thương và tràn đầy niềm vui bên gia đình.",
            "Hy vọng các bạn sẽ có một ngày thật ý nghĩa và hạnh phúc!"
        ]
    }
];

// 2. Cấu hình chính
window.letterConfig = {
    specialNames: ["Tập Thể Nữ 11TA5", "Nữ 11TA5", "11TA5", "Cả lớp", "Mấy bà 11TA5", "test1"],

    custom: {
        "test1": [
            {
                opening: "Chào mừng bạn đến với khu vực bí mật, {name}!",
                sender: "Lilcat 🐱",
                message: ["Đây là tin nhắn kiểm tra hệ thống. Bạn thật tuyệt vời!"]
            }
        ],
        "Tập Thể Nữ 11TA5": messageForGirls11TA5,
        "Nữ 11TA5": messageForGirls11TA5,
        "11TA5": messageForGirls11TA5,
        "Cả lớp": messageForGirls11TA5,
        "Mấy bà 11TA5": messageForGirls11TA5
    },

    // 3. Tin nhắn mặc định (Thêm mới nhiều nội dung hơn)
    default: [
        {
            sender: "Nam 11TA5",
            message: [
                "Thay mặt các bạn nam 11TA5, chúc {name} một ngày 8/3 thật rực rỡ và đáng nhớ.",
                "Cảm ơn {name} đã luôn là một mảnh ghép tuyệt vời, mang lại tiếng cười và sự ấm áp cho lớp mình.",
                "Chúc bạn luôn giữ vững phong độ, học giỏi và mãi là niềm tự hào của tập thể lớp chúng ta nhé!"
            ]
        },
        {
            sender: "Gia Khanhs",
            message: [
                "Chúc {name} luôn tự tin và tràn đầy năng lượng tích cực mỗi khi đến trường.",
                "Mong rằng mọi dự định và ước mơ của {name} đều sẽ trở thành hiện thực.",
                "Hãy luôn nở nụ cười thật tươi vì đó chính là món quà quý giá nhất mà bạn dành tặng cho mọi người xung quanh đấy!"
            ]
        },
        {
            sender: "Lilcat 🐱",
            message: [
                "Mỗi người con gái đều giống như một bông hoa mang hương sắc riêng, và {name} chính là bông hoa rạng rỡ nhất trong khu vườn 11TA5!",
                "Nhân ngày 8/3, Lilcat chúc {name} mãi luôn xinh tươi, hạnh phúc và gặp thật nhiều may mắn trong cuộc sống.",
                "Meow meow! Hãy tận hưởng một ngày thật tuyệt vời nhé!"
            ]
        },
        {
            sender: "Một người bạn giấu tên 🌸",
            message: [
                "Gửi tới {name}, người bạn mà mình luôn thầm ngưỡng mộ vì sự nỗ lực và tốt bụng.",
                "Chúc bạn không chỉ riêng ngày 8/3 mà tất cả 365 ngày trong năm đều ngập tràn niềm vui, nhận được thật nhiều yêu thương và những món quà bất ngờ.",
                "Mong {name} luôn hạnh phúc với những gì mình đang có!"
            ]
        },
        {
            sender: "Hội 'Anh Em' 11TA5",
            message: [
                "Nhân ngày Quốc tế Phụ nữ, hội anh em chúc {name} ăn bao nhiêu cũng không béo, thức khuya học bài mà da vẫn đẹp, và đặc biệt là luôn giữ được tinh thần lạc quan.",
                "Cầu chúc cho {name} thi đâu đậu đó, điểm số lúc nào cũng dẫn đầu và luôn là 'crush' của sự may mắn nhé!"
            ]
        },
        {
            sender: "Team Skibidi 🐱",
            message: [
                "Chúc {name} một ngày 8/3 cực kỳ 'slay' và 'vibe' thật rực rỡ nhé!",
                "Hy vọng bạn sẽ nhận được một 'cơn mưa' quà tặng và những lời chúc ngọt ngào nhất từ mọi người.",
                "Hãy cứ là chính mình - phiên bản tuyệt vời nhất và tỏa sáng theo cách của riêng bạn!"
            ]
        },
        {
            sender: "Người hâm mộ bí mật",
            message: [
                "Thế giới này trở nên dịu dàng và đẹp đẽ hơn rất nhiều nhờ có sự hiện diện của những người như {name}.",
                "Chúc mừng ngày của bạn! Hy vọng bức thư nhỏ này sẽ mang lại cho {name} một chút ấm áp và một nụ cười thật tươi để bắt đầu ngày mới thật hào hứng."
            ]
        },
        {
            sender: "Nam sinh 11TA5",
            message: [
                "Gửi {name}, chúc bạn có một ngày 8/3 ngập tràn hoa và những lời chúc tốt đẹp nhất.",
                "Cảm ơn sự đóng góp thầm lặng của {name} cho những hoạt động của lớp mình trong suốt thời gian qua.",
                "Chúc bạn luôn xinh đẹp, học tốt và có thật nhiều kỷ niệm đẹp dưới mái trường này."
            ]
        },
        {
            sender: "Thanh Tuấn",
            message: [
                "Chúc mừng ngày 8/3 tới {name}! Chúc bạn luôn vui vẻ, trẻ trung và đạt được những thành tích cao nhất trong học kỳ này.",
                "Mong rằng {name} sẽ nhận được thật nhiều sự quan tâm và yêu thương từ gia đình, bạn bè trong ngày đặc biệt hôm nay."
            ]
        },
        {
            sender: "Cánh mày râu 11TA5",
            message: [
                "Chúc {name} có một ngày 8/3 thật ý nghĩa bên những người thân yêu.",
                "Chúc bạn luôn rạng rỡ như ánh bình minh, mạnh mẽ như những đóa hoa hướng dương và luôn hạnh phúc với con đường mình đã chọn."
            ]
        }
    ],
    // 4. Hơn 10 câu mở đầu (Openings) đa dạng
    openings: [
        "Chúc mừng ngày Quốc tế Phụ nữ 8/3, {name}!",
        "Dành tặng một lời chúc ngọt ngào nhất tới {name},",
        "Gửi tới bông hoa rạng rỡ nhất của lớp mình là {name},",
        "Chào ngày 8/3 thật xinh đẹp và bình yên nhé {name},",
        "Hôm nay là ngày để cả thế giới tôn vinh {name},",
        "Tới {name}, cô bạn tuyệt vời nhất mà mình từng biết,",
        "Một chút yêu thương gửi đến {name} nhân ngày đặc biệt này,",
        "Này {name} ơi, có một bất ngờ nhỏ đang chờ bạn khám phá nè,",
        "Gửi ngàn lời chúc tốt đẹp và chân thành nhất tới {name},",
        "Chào công chúa {name}, chúc bạn một ngày mới thật rạng rỡ,",
        "Bức thư này được viết riêng để dành tặng cho {name} đó,",
        "Hy vọng ngày hôm nay của {name} sẽ tràn ngập những niềm vui bất ngờ,",
        "Mỉm cười thật tươi lên nhé {name}, vì hôm nay bạn là người đẹp nhất!",
        "Gửi {name}, hy vọng lời chúc nhỏ này sẽ khiến bạn cảm thấy ấm lòng,",
        "Chúc {name} có một ngày 8/3 thật trọn vẹn và hạnh phúc bên bạn bè!"
    ]
};
