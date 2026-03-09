// config.js

const letterConfig = {

    // Names that trigger special messages
    specialNames: [
        "test1",
        "test2",
        "test3"
    ],

    // Special letters for specific names
    custom: {

        "test1": {
            sender: "Lilcat 🐱",
            message: [
                "Gửi Linh,",
                "Nhân ngày 8/3, chúc bạn luôn vui vẻ, hạnh phúc và đạt được thật nhiều điều tuyệt vời trong cuộc sống.",
                "Hy vọng mỗi ngày của bạn đều tràn ngập tiếng cười và những điều tốt đẹp.",
                "Cảm ơn vì đã luôn là một người bạn tuyệt vời!"
            ]
        },

        "test2": {
            sender: "Lilcat 🐱",
            message: [
                "Gửi Trang,",
                "Chúc bạn một ngày 8/3 thật rực rỡ và tràn đầy niềm vui.",
                "Mong rằng mọi ước mơ của bạn sẽ dần trở thành hiện thực.",
                "Hãy luôn tự tin và tỏa sáng theo cách riêng của mình nhé!"
            ]
        },

        "test3": {
            sender: "Lilcat 🐱",
            message: [
                "Gửi Mai,",
                "Chúc bạn có một ngày 8/3 thật ấm áp và nhiều niềm vui.",
                "Hy vọng bạn sẽ luôn giữ được nụ cười xinh và nguồn năng lượng tích cực.",
                "Chúc bạn học tốt, sống vui và luôn gặp nhiều may mắn!"
            ]
        }

    },

    // Letters for everyone else (randomly selected)
    default: [

        {
            sender: "Lilcat 🐱",
            message: [
                "Chúc bạn một ngày 8/3 thật ý nghĩa.",
                "Mong rằng hôm nay bạn sẽ nhận được thật nhiều lời chúc, hoa và niềm vui.",
                "Hãy luôn tỏa sáng theo cách của riêng mình nhé!"
            ]
        },

        {
            sender: "Lilcat 🐱",
            message: [
                "Happy Women's Day!",
                "Chúc bạn luôn xinh đẹp, mạnh mẽ và hạnh phúc.",
                "Mong rằng mọi điều tốt đẹp sẽ luôn đến với bạn."
            ]
        },

        {
            sender: "Tập thể 11TA5 💖",
            message: [
                "Chúc bạn một ngày 8/3 thật vui vẻ.",
                "Cảm ơn vì đã làm cho lớp học của chúng ta trở nên tuyệt vời hơn.",
                "Hy vọng bạn sẽ luôn giữ được nụ cười thật tươi!"
            ]
        },

        {
            sender: "Một người bí mật 🌸",
            message: [
                "Có thể bạn không biết, nhưng bạn thật sự rất tuyệt vời.",
                "Chúc bạn luôn hạnh phúc và gặp nhiều điều may mắn trong cuộc sống.",
                "Chúc mừng ngày 8/3!"
            ]
        },

        {
            sender: "Lilcat 🐱",
            message: [
                "Mỗi người con gái đều giống như một bông hoa.",
                "Hy vọng bạn sẽ luôn nở rực rỡ và mang lại niềm vui cho mọi người xung quanh.",
                "Chúc bạn một ngày 8/3 thật tuyệt!"
            ]
        }

    ],

    // Random opening lines
    openings: [
        "Chúc mừng ngày 8/3, {name}!",
        "Dành cho một người đặc biệt mang tên {name},",
        "Gửi tới bông hoa rạng rỡ nhất hôm nay là {name},",
        "Một lời chúc nhỏ gửi đến {name},",
        "Chào ngày 8/3 thật xinh đẹp nhé {name},",
        "Tới {name}, người tuyệt vời của ngày hôm nay,",
        "Một chút yêu thương gửi đến {name},",
        "Hôm nay là ngày đặc biệt dành cho {name},",
        "Xin gửi lời chúc tốt đẹp nhất đến {name},",
        "Chúc {name} có một ngày 8/3 thật đáng nhớ!"
    ]

};
