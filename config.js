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
            "Chúc tập thể nữ 11TA5 luôn đoàn kết, mãi xinh tươi và đạt được mọi nguyện vọng nhé!",
            "Hy vọng các bạn sẽ luôn giữ vững sự tự tin và gặt hái được nhiều thành công trong kỳ thi sắp tới.",
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
    },
    {
        sender: "Bảo Phúc",
        message: ["Gửi tập thể nữ 11TA5, chúc các bạn có một ngày 8/3 thật ý nghĩa và hạnh phúc. Mong các bạn luôn giữ được sự dịu dàng, rạng rỡ và đạt được kết quả cao nhất trong mọi dự định sắp tới!"]
    },
    {
        sender: "Anh Khôi",
        message: ["Nhân ngày Quốc tế Phụ nữ, mình xin gửi lời chúc chân thành nhất đến các bạn nữ trong lớp. Chúc các bạn luôn bình yên, xinh đẹp và giữ vững được sự kiên trì trên con đường học tập của mình."]
    },
    {
        sender: "Minh Hoàng",
        message: ["Chúc các bạn nữ 11TA5 luôn vui vẻ và tràn đầy năng lượng. Cảm ơn sự hiện diện của các bạn đã giúp tập thể lớp chúng ta thêm phần ấm áp và trọn vẹn. Chúc các bạn một ngày 8/3 ngập tràn yêu thương!"]
    },
    {
        sender: "Hoàng Tùng",
        message: ["Gửi lời chúc tốt đẹp nhất đến phái nữ của 11TA5. Chúc các bạn luôn tự tin vào bản thân, không chỉ xinh đẹp mà còn ngày càng bản lĩnh để chinh phục những mục tiêu phía trước."]
    },
    {
        sender: "Thanh Tùng",
        message: ["Chúc các bạn có một ngày 8/3 thật trọn vẹn bên gia đình và bạn bè. Mong rằng mọi nỗ lực trong học tập của các bạn đều mang lại những kết quả xứng đáng nhất!"]
    },
    {
        sender: "Hoàng Ân",
        message: ["Nhân ngày 8/3, mình chúc các bạn nữ luôn tươi tắn và hạnh phúc. Hy vọng các bạn sẽ luôn nhận được sự quan tâm và những món quà ý nghĩa nhất từ những người thân yêu."]
    },
    {
        sender: "Phúc Minh",
        message: ["Chúc các bạn nữ luôn giữ được nét hồn nhiên và nụ cười rạng rỡ. Mong rằng các bạn sẽ luôn hạnh phúc với những lựa chọn của mình và gặt hái được nhiều thành công rực rỡ!"]
    },
    {
        sender: "Gia Phúc",
        message: ["Gửi đến các bạn nữ 11TA5 lời chúc sức khỏe và niềm vui. Chúc các bạn một ngày lễ 8/3 thật đáng nhớ, luôn xinh đẹp và nhận được thật nhiều điểm 10 trong học tập!"]
    },
    {
        sender: "「HUЯ𐐒 oИ ɒɿɒwiįυꟻ」",
        message: ["Chúc các bạn 8/3 sớm tìm được \"quân vua\" của đời mình vì các bạn là \"quân hậu\", không ai cản nổi nước đi của các bạn"]
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

    // 3. Tin nhắn mặc định (Lịch sự, trưởng thành)
    default: [
        {
            sender: "Bảo Phúc",
            message: [
                "Chào {name}, chúc bạn có một ngày 8/3 thật rạng rỡ và hạnh phúc bên những người thân yêu.",
                "Mong {name} sẽ luôn giữ được sự điềm tĩnh, tự tin và gặt hái được nhiều thành tích cao trong học kỳ này.",
                "Chúc bạn luôn xinh đẹp và gặp thật nhiều may mắn trong cuộc sống!"
            ]
        },
        {
            sender: "Anh Khôi",
            message: [
                "Gửi tới {name}, mình chúc bạn một ngày Quốc tế Phụ nữ thật bình yên và ý nghĩa.",
                "Hy vọng bạn sẽ luôn kiên định với những mục tiêu của mình và giữ vững được sự nhẹ nhàng, tinh tế vốn có.",
                "Chúc {name} luôn học tốt và là một thành viên ưu tú của lớp 11TA5."
            ]
        },
        {
            sender: "Minh Hoàng",
            message: [
                "Chúc {name} 8/3 vui vẻ và luôn ngập tràn niềm vui mỗi khi đến trường.",
                "Mong rằng mọi dự định của bạn đều sẽ trở thành hiện thực và nụ cười luôn nở trên môi {name}.",
                "Cảm ơn bạn vì đã luôn đồng hành cùng tập thể lớp chúng ta!"
            ]
        },
        {
            sender: "Hoàng Tùng",
            message: [
                "Chúc mừng ngày 8/3 đến {name}. Chúc bạn ngày càng xinh đẹp, thông minh và bản lĩnh hơn.",
                "Hy vọng bạn sẽ nhận được thật nhiều lời chúc tốt đẹp và những món quà bất ngờ trong ngày hôm nay.",
                "Chúc bạn luôn hạnh phúc và đạt được kết quả học tập như ý!"
            ]
        },
        {
            sender: "Thanh Tùng",
            message: [
                "Gửi lời chúc 8/3 chân thành nhất tới {name}. Chúc bạn luôn mạnh mẽ và rạng rỡ như ánh mặt trời.",
                "Dù phía trước có những thử thách, mình tin rằng {name} sẽ luôn vượt qua và tỏa sáng theo cách riêng.",
                "Chúc bạn một ngày lễ thật ấm áp và trọn vẹn!"
            ]
        },
        {
            sender: "Hoàng Ân",
            message: [
                "Nhân ngày của phái đẹp, chúc {name} luôn nhận được sự yêu thương và trân trọng từ mọi người.",
                "Mong bạn luôn giữ được nét dễ thương, học giỏi và gặt hái được thật nhiều thành công sắp tới.",
                "Hãy tận hưởng ngày 8/3 thật ý nghĩa nhé!"
            ]
        },
        {
            sender: "Phúc Minh",
            message: [
                "Chúc {name} một ngày 8/3 thật nhiều kỷ niệm đẹp. Mong bạn luôn lạc quan và tràn đầy cảm hứng trong học tập.",
                "Chúc bạn luôn xinh tươi và đạt được những thành tích cao nhất mà mình mong đợi.",
                "Mãi hạnh phúc và vui vẻ nhé!"
            ]
        },
        {
            sender: "Gia Phúc",
            message: [
                "Happy 8/3, {name}! Chúc mọi điều may mắn và tốt lành nhất sẽ luôn đồng hành cùng bạn.",
                "Mong {name} ngày càng tự tin, học giỏi và luôn là chính mình - một phiên bản tuyệt vời nhất.",
                "Chúc bạn có một ngày lễ thật hạnh phúc!"
            ]
        },
        {
            sender: "Nam 11TA5",
            message: ["Thay mặt các bạn nam 11TA5, chúc {name} một ngày 8/3 thật rực rỡ. Cảm ơn {name} đã là một mảnh ghép tuyệt vời của lớp mình."]
        },
        {
            sender: "Gia Khanhs",
            message: ["Chúc {name} luôn tự tin và tràn đầy năng lượng tích cực mỗi khi đến trường. Mong mọi điều tốt đẹp nhất sẽ đến với {name}."]
        },
        {
            sender: "Lilcat 🐱",
            message: ["Mỗi người con gái đều mang một nét đẹp riêng, và {name} chính là bông hoa rạng rỡ nhất. Chúc bạn mãi xinh tươi và hạnh phúc."]
        },
        {
            sender: "「HUЯ𐐒 oИ ɒɿɒwiįυꟻ」",
            message: ["Chúc {name} 8/3 sớm tìm được \"quân vua\" của đời mình vì bạn là \"quân hậu\", không ai cản nổi nước đi của bạn!"]
        }
    ],

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
