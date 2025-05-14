import { useEffect, useState } from "react";
import { proxyStorage } from "../../../../utils/proxyStorage";
import { useParams } from "react-router";

export const TranslateLabels: any = {
	vi: {
		HOME_PAGE: "Trang chủ",
		ABOUT_GLOW: "Về Glow",
		HOME_PAGE_GLOW_PARTNER: "Trở thành đối tác Glow",
		HOME_PAGE_GLOW_BLOG: "Blog",

		HOME_TITLE_1: "Tận hưởng sự thư giãn làm đẹp tại nhà",
		HOME_TITLE_2:
			"Nơi cung cấp các dịch vụ Spa, làm đẹp tại nhà dành riêng cho bạn. Hãy để chúng tôi giúp bạn thư giãn và làm đẹp mà không cần phải ra khỏi nhà.",
		HOME_DOWNLOAD: "Tải ứng dụng",
		HOME_GLOW_PARTNER: "Trở thành đối tác Glow",

		HONE_INSTRAC_TITLE_TOP: "3 bước để trải nghiệm",
		HONE_INSTRAC_TITLE_BOTTOM: "Đơn giản, tiện lợi, ít thao tác",
		HONE_INSTRAC_TITLE_1: "Đặt lịch với đối tác",
		HONE_INSTRAC_TITLE_2: "Chờ kết nối",
		HONE_INSTRAC_TITLE_3: "Gặp đối tác tại điểm hẹn",
		HONE_INSTRAC_CONTENT_1:
			"Truy cập trang web hoặc ứng dụng di động của Glow, lựa chọn gói và chọn thời gian phù hợp với lịch trình của bạn chỉ trong vài lần chạm đơn giản.",
		HONE_INSTRAC_CONTENT_2:
			"Sau khi đặt lịch thành công, Glow sẽ kết nối bạn với những chuyên gia làm đẹp giàu kinh nghiệm và nhiệt tình trong khu vực của bạn.",
		HONE_INSTRAC_CONTENT_3:
			"Chuyên gia của Glow đến tận nhà với trang thiết bị hiện đại và sản phẩm chất lượng, mang đến cho bạn trải nghiệm làm đẹp thư giãn và đẹp tự nhiên trong không gian riêng tư.",

		HOME_SERVICE_TITLE: "Dịch vụ tại Glow",
		HOME_SERVICE_TITLE_1: "Massage",
		HOME_SERVICE_TITLE_2: "Nail",
		HOME_SERVICE_TITLE_3: "Makeup",
		HOME_SERVICE_TITLE_4: "Hairstylist",
		HOME_SERVICE_CONTENT_1: "Khỏe mạnh & Thư giãn ngay tại nhà",
		HOME_SERVICE_CONTENT_2: "Sở hữu ngay 1 bộ móng xinh theo sở thích",
		HOME_SERVICE_CONTENT_3: "Là con gái đi đâu cũng phải xinh",
		HOME_SERVICE_CONTENT_4: "Tạo kiểu tóc phù hợp với sự kiện và makeup look của bạn",

		HOME_DOWNLOAD_TITLE: "Tải ứng dụng Glow",
		HOME_DOWNLOAD_CONTENT:
			"Nơi cung cấp các dịch vụ Spa, làm đẹp tại nhà dành riêng cho bạn. Hãy để chúng tôi giúp bạn thư giãn và làm đẹp mà không cần phải ra khỏi nhà.",
		HOME_DOWNLOAD_IMG: "./static/img/bannerdkVN.png",

		HOME_INTRODUCE_TITLE_1: "Cung cấp các dịch vụ sức khỏe, làm đẹp tại nhà dành cho bạn",
		HOME_INTRODUCE_TITLE_1_CONTENT_1: " Tiện lợi: Đa dạng dịch vụ Beauty & Spa, đặt lịch tại nhà, mọi lúc mọi nơi",
		HOME_INTRODUCE_TITLE_1_CONTENT_2: "Giá cả: Rõ ràng, minh bạch, không cần trả thêm chi phí nào khác",
		HOME_INTRODUCE_TITLE_1_CONTENT_3:
			"Chất lượng: Đối tác Glow được tuyển chọn, sàng lọc và đào tạo kỹ lưỡng cả về chuyên môn lẫn đạo đức",
		HOME_INTRODUCE_TITLE_2: "Tạo cơ hội tăng thu nhập dành cho mọi người",
		HOME_INTRODUCE_TITLE_2_CONTENT_1: "  Gia tăng thu nhập nhờ nguồn khách dồi dào",
		HOME_INTRODUCE_TITLE_2_CONTENT_2: "Được đào tạo nâng cao và tay nghề giúp đối tác xây dựng thương hiệu cá nhân",
		HOME_INTRODUCE_TITLE_2_CONTENT_3:
			"Glow sẵn sàng đồng hành cùng đối tác trên con đường sự nghiệp như nâng cao kỹ năng quản lý, hay tự kinh doanh spa ",
		HOME_INTRODUCE_PARTNER: "Đăng ký trở thành Đối tác Glow",

		FOOTER_TITLE: "Cung cấp các dịch vụ sức khỏe, làm đẹp tại nhà dành cho bạn",
		FOOTER_LINK: "Liên kết nhanh",
		FOOTER_HOME_PAGE: "Trang chủ",
		FOOTER_ABOUT_GLOW: "Về Glow",
		FOOTER_GLOW_PARTNER: "Trở thành Đối tác Glow",
		FOOTER_PRIVACY_POLICY: "Chính sách bảo mật",
		FOOTER_TERM_SERVICE: "Điều khoản dịch vụ",
		FOOTER_OPERATING_REGULATION: "Quy chế hoạt động",
		FOOTER_INFOMATION: "Thông tin",
		FOOTER_ADDRESS: "Tầng 14, 169 Nguyễn Ngọc Vũ, Trung Hòa, Cầu Giấy, Hà Nội",
		FOOTER_BUSINESS_NUMBER: "Mã số doanh nghiệp",

		ABOUT_TITLE_TOP: "Câu chuyện của Glow",
		ABOUT_TITLE_BOTTOM: "Khỏe đẹp để hạnh phúc và tận hưởng cuộc sống",
		ABOUT_TITLE_1: '"Có sức khỏe là có tất cả"',
		ABOUT_CONTENT_1:
			"là nỗ lực và ước mơ của chúng ta, đặc biệt khi nhân loại vừa trải qua đại dịch Covid 19 (2019-2022). Những khủng hoảng trong dịch bệnh đã thay đổi phần nào suy nghĩ về “sức khỏe” và cách chúng ta chăm sóc sức khỏe ngay tại nhà hàng ngày.",
		ABOUT_CONTENT_2:
			"“Khỏe” trong cuộc sống hiện đại chính là khỏe từ lối sống tinh thần, thói quen, cả cách chúng ta làm đẹp và chăm sóc bản thân mình. Từ đó, nhu cầu kết nối với những kỹ thuật viên cung cấp dịch vụ chăm sóc sức khỏe như massage tại nhà, làm đẹp tại nhà trở nên thiết yếu.Tuy nhiên việc tìm kiếm gặp khó khăn bởi rào cản về địa lý, thời gian, và độ tin cậy, đòi hỏi một nền tảng công nghệ kết nối ra đời, đáp ứng các tiêu chí về chuyên môn, uy tín và sự tiện lợi.",
		ABOUT_TITLE_2: "Năm 2020",
		ABOUT_TITLE_2_BOTTOM: "Thấu hiểu được nhu cầu Massage tại nhà và Làm đẹp của khách hàng",
		ABOUT_CONTENT_3:
			"Ứng dụng Glow ra đời vào năm 2020 - tự hào là cầu nối của bạn với đội ngũ kỹ thuật viên chăm sóc sức khỏe đa dạng tay nghề và chuyên môn tại Việt Nam. Ứng dụng Glow không chỉ đóng vai trò là một trợ lý sức khỏe, giúp bạn tìm được một kỹ thuật viên phù hợp để cải thiện các vấn đề cơ xương khớp hoặc thư giãn sau giờ làm việc căng thẳng bằng phương pháp Massage, mà còn là một “Beauty & Spa di động”, giúp bạn thăng cấp nhan sắc ngay tại nhà chỉ với vài thao tác đơn giản trên chiếc điện thoại.",
		ABOUT_CONTENT_4:
			"Điều khiến Ứng dụng Glow được đón nhận và tin tưởng không chỉ là việc tiên phong trở thành một người bạn hữu ích, tận tâm với khách hàng và kỹ thuật viên, mà còn ở nỗ lực luôn học hỏi, phát triển và cải tiến để mang đến một tinh thần tích cực, văn minh cho thị trường chăm sóc sức khỏe tại Việt Nam, đảm bảo quyền lợi và sự minh bạch cho cả hai bên Ứng dụng Glow kết nối và đồng hành.",
		ABOUT_CONTENT_5:
			"Nếu sức khỏe là một khu vườn - Ứng dụng Glow hạnh phúc khi được đồng hành cùng bạn trên hành trình để chăm sóc cho khu vườn sức khỏe của bạn luôn tươi xanh và tràn ngập những điều tươi sáng.",
		ABOUT_CONTENT_6: "Khỏe - Đẹp để hạnh phúc và tận hưởng cuộc sống!",
		ABOUT_CONTENT_7: "Tầm nhìn",
		ABOUT_CONTENT_8: "Trở thành nền tảng chăm sóc sức khỏe & sắc đẹp lớn nhất Việt Nam và vươn tầm châu lục.",
		ABOUT_CONTENT_9: "Sứ mệnh",
		ABOUT_CONTENT_10: "Giúp mọi người khỏe đẹp và hạnh phúc hơn.",
		ABOUT_CONTENT_11: "Giá trị cốt lõi",
		ABOUT_CONTENT_12: "Kết nối",
		ABOUT_CONTENT_13: "Uy tín",
		ABOUT_CONTENT_14: "Thấu hiểu",
		ABOUT_CONTENT_15: "Minh bạch",
		ABOUT_CONTENT_16: "Quan tâm",

		PARTNER_TITLE_TOP: "Trở thành đối tác của Glow",
		PARTNER_TITLE_BOTTOM: "Thân chào Quý đối tác",
		PARTNER_CONTENT_1:
			"Glow trân trọng và biết ơn vì sự hợp tác vủa bạn với Ứng dụng Glow. Chúng tôi tin rằng bạn là một trong những viên kim cương tỏa sáng mà chúng tôi mong muốn được tìm thấy và kết nối tới khách hàng. Đúng như cái tên Glow - tỏa sáng, chúng tôi không chỉ mong muốn mọi người được chăm sóc sức khỏe như massage tại nhà hay chăm sóc sắc đẹp một cách tiện lợi, an toàn và chất lượng mà còn hy vọng rằng mỗi Đối tác tại Glow sẽ luôn tìm thấy được niềm hứng khởi, đam mê với công việc, góp phần lan tỏa những điều tích cực tới cộng đồng.",
		PARTNER_DOWNLOAD: "Tải ứng dụng ",
		PARTNER_TITLE_1: "Bạn sẽ nhận được các quyền lợi đặc biệt và xứng đáng",
		PARTNER_TITLE_2: "Thu nhập",
		PARTNER_CONTENT2: "Gia tăng thu nhập nhờ nguồn khách hàng dồi dào.",
		PARTNER_TITLE_3: "Đánh giá",
		PARTNER_CONTENT_3: "Đối tác Glow được hàng triệu khách hàng trải nghiệm và đánh giá.",
		PARTNER_TITLE_4: "Thương hiệu",
		PARTNER_CONTENT_4:
			"Glow là nơi các Đối tác xây dựng thương hiệu và tiếp cận đến hàng triệu khách hàng tiềm năng.",
		PARTNER_TITLE_RES: "Hướng dẫn Trở thành Đối tác Glow",
		PARTNER_TITLE_5: "Hướng dẫn Trở thành Đối tác Glow",
		PARTNER_TITLE_DOWNLOAD_1: "Quét QR hoặc nhấn vào biểu tượng để tải ứng dụng Glow",
		PARTNER_TITLE_DOWNLOAD_2: 'Chọn "Trở thành Đối tác Glow"',
		PARTNER_TITLE_DOWNLOAD_3: "Điền đầy đủ thông tin và sẵn sàng nhận đơn hàng",
		PARTNER_SRC_IMG: "./static/img/bannerdkVN.png",

		POLICY_TITLE: " Chính sách bảo mật ",
		POLICY_UPDATE: "Cập nhật lần cuối: ngày 1 tháng 4 năm 2023",
		POLICY_TITLE_A: "A. Thu thập Thông tin Cá nhân",
		POLICY_CONTENT_1:
			"Thông tin Cá nhân là thông tin về bạn mang tính nhận dạng, bao gồm nhưng không giới hạn tên, số chứng minh thư nhân dân, số giấy khai sinh, số hộ chiếu, quốc tịch, địa chỉ, số điện thoại, số fax, thông tin ngân hàng, thông tin thẻ tín dụng, dân tộc, giới tính, ngày sinh, tình trạng hôn nhân, tình trạng cư trú, nền tảng giáo dục, tình trạng tài chính, sở thích cá nhân, địa chỉ thư điện tử (email) của bạn, nghề nghiệp, định danh của bạn trong Glow, thông tin của bạn trong Glow, ngành làm việc của bạn, bất kỳ thông tin nào về bạn mà bạn đã cung cấp cho Glow trong các đơn đăng ký, đơn xin gia nhập hoặc bất kỳ đơn tương tự nào và/hoặc bất kỳ thông tin nào về bạn đã được hoặc sẽ được Glow thu thập, lưu trữ, sử dụng và xử lý theo thời gian và bao gồm các thông tin cá nhân nhạy cảm như các dữ liệu về sức khỏe, tôn giáo hoặc tín ngưỡng tương tự khác.",
		POLICY_TITLE_B: "B. Mục đích và phạm vi sử dụng thông tin",
		POLICY_TITLE_1: "Phạm vi thu thập thông tin",
		POLICY_CONTENT_2:
			"Thông tin Cá nhân là thông tin về người dùng mang tính nhận dạng, bao gồm nhưng không giới hạn tên, số chứng minh thư nhân dân, số giấy khai sinh, số hộ chiếu, quốc tịch, địa chỉ, số điện thoại, số fax, thông tin ngân hàng, thông tin thẻ tín dụng, dân tộc, giới tính, ngày sinh, tình trạng hôn nhân, tình trạng cư trú, nền tảng giáo dục, tình trạng tài chính, sở thích cá nhân, địa chỉ thư điện tử (email) của người dùng, nghề nghiệp, định danh của người dùng trong Glow, thông tin của người dùng trong Glow, ngành làm việc của người dùng, bất kỳ thông tin nào về người dùng mà người dùng đã cung cấp cho Glow trong các đơn đăng ký, đơn xin gia nhập hoặc bất kỳ đơn tương tự nào và/hoặc bất kỳ thông tin nào về người dùng đã được hoặc sẽ được Glow thu thập, lưu trữ, sử dụng và xử lý theo thời gian và bao gồm các thông tin cá nhân nhạy cảm như các dữ liệu về sức khỏe, tôn giác hoặc tín ngưỡng tương tự khác",
		POLICY_CONTENT_3:
			"Việc người dùng cung cấp Thông tin Cá nhân của người dùng là hoàn toàn tự nguyện. Tuy nhiên, nếu người dùng không cung cấp cho Glow Thông tin Cá nhân của người dùng, Glow sẽ không thể xử lý Thông tin Cá nhân của người dùng cho các Mục đích và Mục đích Bổ sung như được nêu dưới đây:",
		POLICY_CONTENT_4:
			"Nếu người dùng là một đại lý, người bán hàng hoặc nhà cung cấp dịch vụ, việc cung cấp Thông tin Cá nhân của người dùng là bắt buộc, và việc không cung cấp Thông tin Cá nhân của người dùng sẽ là hành vi vi phạm pháp luật hoặc các quy định pháp lý, và có thể khiến Glow không thể hợp tác với người dùng để cung cấp các dịch vụ hoặc sản phẩm hoặc thực hiện các khoản thanh toán cho người dùng về sản phẩm hoặc dịch vụ mà người dùng cung cấp.",
		POLICY_CONTENT_5:
			"Bên cạnh những Thông tin Cá nhân người dùng trực tiếp cung cấp cho Glow, Glow có thể thu thập Thông tin Cá nhân của người dùng từ nhiều nguồn khác nhau như:",
		POLICY_CONTENT_6: "Điền các đơn đăng ký hoặc đơn xin gia nhập hoặc các đơn tương tự khác;",
		POLICY_CONTENT_7: "Từ các nguồn công khai khác như danh bạ;",
		POLICY_CONTENT_8:
			"Từ các trang mạng xã hội của Glow, nếu người dùng theo dõi, thích hoặc người dùng là fan của các trang đó;",
		POLICY_CONTENT_9: "Từ các tổ chức báo cáo tín dụng;",
		POLICY_CONTENT_10: "Khi người dùng tương tác và giao tiếp với Glow tại bất kỳ sự kiện hay hoạt động nào;",
		POLICY_CONTENT_11: "Khi người dùng tham gia các cuộc thi do Glow tổ chức",
		POLICY_CONTENT_12: "Từ nhiều thực thể hoặc đơn vị thuộc Glow; hoặc",
		POLICY_CONTENT_13:
			"Qua việc sử dụng các trang web của Glow, bao gồm tất cả các trang web do Glow điều hành và đặt dưới tên thương hiệu tương ứng (“các Trang Web”). Thông tin Cá nhân của người dùng có thể được thu thập từ tập cookies được sử dụng trên các Trang Web",
		POLICY_TITLE_2: "Mục đích chung:",
		POLICY_TITLE2_CONTENT_1: "Để trả lời các câu hỏi, bình luận và phản hồi của người dùng;",
		POLICY_TITLE2_CONTENT_2: "Để liên lạc với người dùng về bất kỳ mục đích nào được liệt kê tại Thông báo này;",
		POLICY_TITLE2_CONTENT_3:
			"Để phục vụ mục đích quản lý nội bộ như kiểm toán, phân tích dữ liệu, lưu trữ cơ sở dữ liệu;",
		POLICY_TITLE2_CONTENT_4: "Để phục vụ mục đích phát hiện, ngăn chặn và truy tố tội phạm;",
		POLICY_TITLE2_CONTENT_5: "Để giúp Glow tuân thủ các nghĩa vụ theo quy định của pháp luật;",
		POLICY_TITLE_3: "Đối với khách hàng sử dụng các dịch vụ do Glow cung cấp:",
		POLICY_TITLE3_CONTENT_1:
			"Để thực hiện các nghĩa vụ của Glow theo bất kỳ thỏa thuận nào được ký kết với khách hàng;",
		POLICY_TITLE3_CONTENT_2: "Để cung cấp cho khách hàng bất kỳ dịch vụ nào mà khách hàng yêu cầu;",
		POLICY_TITLE3_CONTENT_3: "Để xử lý các đăng ký của khách hàng và để cung cấp các dịch vụ cho khách hàng;",
		POLICY_TITLE3_CONTENT_4:
			"Khi khách hàng yêu cầu tải xuống và sử dụng ứng dụng Glow (“Ứng dụng”), hoặc để xử lý yêu cầu của khách hàng, để cung cấp Ứng dụng cho khách hàng và để cung cấp cho khách hàng giấy phép sử dụng Ứng dụng;",
		POLICY_TITLE3_CONTENT_5:
			"Để xử lý việc tham gia của khách hàng vào bất kỳ sự kiện, hoạt động, nhóm trọng điểm, nghiên cứu, cuộc thi, chương trình khuyến mại, cuộc bình chọn, khảo sát hoặc sản phẩm nào;",
		POLICY_TITLE3_CONTENT_6:
			"Để xử lý, quản lý hoặc xác minh việc đăng ký theo dõi của khách hàng đối với Glow và để cung cấp cho khách hàng các lợi ích dành cho người theo dõi;",
		POLICY_TITLE3_CONTENT_7:
			"Để xác nhận các đặt hàng của khách hàng và xử lý các thanh toán liên quan đến bất kỳ sản phẩm hay dịch vụ nào mà khách hàng đã yêu cầu;",
		POLICY_TITLE3_CONTENT_8:
			"Để hiểu và phân tích việc kinh doanh của chúng tôi cũng như các nhu cầu và sở thích của khách hàng;",
		POLICY_TITLE3_CONTENT_9:
			"Để phát triển, tăng cường, và cung cấp các sản phẩm và dịch vụ để đáp ứng được nhu cầu của khách hàng;",
		POLICY_TITLE3_CONTENT_10: "Để xử lý việc trao đổi hoặc trả lại sản phẩm;",
		POLICY_TITLE3_CONTENT_11:
			"Đối với khách hàng là đại lý, người bán hàng, nhà cung cấp, đối tác, nhà thầu hoặc nhà cung cấp dịch vụ:",
		POLICY_TITLE3_CONTENT_12: "Để phục vụ mục đích hợp tác với khách hàng để cung cấp dịch vụ hoặc sản phẩm;",
		POLICY_TITLE3_CONTENT_13:
			"Để tạo điều kiện hoặc cho phép bất kỳ sự kiểm tra nào mà Glow có thể yêu cầu để hợp tác với khách hàng;",
		POLICY_TITLE3_CONTENT_14:
			"Để xử lý các thanh toán liên quan đến bất kỳ sản phẩm hoặc dịch vụ nào mà khách hàng cung cấp;",
		POLICY_TITLE3_CONTENT_15: "Để liên lạc với khách hàng hoặc với Glow của khách hàng.",

		SERVICE_TITLE: "Điều khoản dịch vụ",
		SERVICE_UPDATE: "Cập nhật lần cuối: ngày 1 tháng 4 năm 2023",
		SERVICE_TITLE_A: "A. Điều khoản cung cấp dịch vụ",
		SERVICE_A_CONTENT_1:
			"1. Người dùng cần cam kết đủ 18 tuổi khi cung cấp dịch vụ trên sàn thương mại điện tử Glow.",
		SERVICE_A_CONTENT_2:
			"2. Nghiêm cấm các hình thức lạm dụng ứng dụng Glow để mua bán mại dâm, hẹn hò có trả phí. Người dùng sẽ bị khóa tài khoản và phải chịu trách nhiệm trước pháp luật về hành vi của mình",
		SERVICE_A_CONTENT_3:
			"3. Nghiêm cấm mọi nội dung, hình ảnh nhạy cảm và phản cảm. Nó sẽ bị xóa ngay lập tức đồng thời người dùng sẽ bị khóa tài khoản vĩnh viễn.",
		SERVICE_TITLE_B: "B. Một số phí trên Glow người dùng cần nắm rõ",
		SERVICE_B_CONTENT_1:
			"1. Đối với Đối tác kỹ thuật viên: Với mỗi đơn hàng thành công trên hệ thống Glow, Glow sẽ thu phí 20% - 40% từ Đối tác kỹ thuật viên.",
		SERVICE_B_CONTENT_2:
			"2. Đối với khách hàng: Khi quý khách hàng rút tiền khỏi ví Glow, Glow sẽ thu phí 3% trên một giao dịch rút tiền. Vui lòng liên lạc với hotline của chúng tôi 0888129100 để yêu cầu rút tiền.",
		SERVICE_TITLE_C: "C. Quan hệ hợp đồng",
		SERVICE_C_CONTENT_1:
			"Các Điều khoản Sử dụng này (“Điều khoản”) điều chỉnh việc bạn, một cá nhân, từ bất kỳ quốc gia nào trên thế giới truy cập hoặc sử dụng các ứng dụng, trang web, nội dung, sản phẩm và dịch vụ (“Dịch vụ”) của Công ty cổ phần Glow.",
		SERVICE_C_CONTENT_2:
			"Việc tiếp cận và sử dụng các Dịch vụ của bạn đã cấu thành sự chấp nhận chịu sự ràng buộc của các Điều khoản này, sự ràng buộc này sẽ thiết lập mối quan hệ hợp đồng giữa bạn và Glow. Nếu bạn không đồng ý với các Điều khoản này, bạn sẽ không có quyền truy cập hoặc sử dụng các dịch vụ. Các Điều khoản này sẽ thay thế cho các thỏa thuận hoặc hợp đồng trước đây của bạn. Glow có thể ngay lập tức chấm dứt các Điều khoản này hoặc bất kỳ Dịch vụ nào liên quan đến bạn, hoặc ngừng cung cấp hoặc từ chối quyền truy cập đến các Dịch vụ hoặc bất kỳ phần nào của dịch vụ, vào bất kỳ lúc nào vì bất kỳ lý do gì.",
		SERVICE_C_CONTENT_3:
			"Các điều khoản bổ sung có thể được áp dụng cho các Dịch vụ nhất định, ví dụ như các chính sách cho một sự kiện, hoạt động hoặc khuyến mãi cụ thể, và các điều khoản bổ sung này sẽ được thông báo cho bạn liên quan đến các Dịch vụ được áp dụng. Các điều khoản bổ sung được thêm vào, sẽ được coi là một phần của các Điều khoản dành cho các mục đích của Dịch vụ được áp dụng. Các điều khoản bổ sung sẽ được ưu tiên áp dụng hơn các Điều khoản này trong trường hợp có xung đột liên quan đến các Dịch vụ được áp dụng.",
		SERVICE_C_CONTENT_4:
			"Glow có thể sửa đổi các Điều khoản liên quan đến các Dịch vụ tùy từng thời điểm. Các sửa đổi sẽ có hiệu lực khi Glow đăng các Điều khoản được cập nhật tại vị trí này hoặc các chính sách sửa đổi hoặc các điều khoản bổ sung về Dịch vụ áp dụng. Nếu bạn tiếp tục truy cập hoặc sử dụng các Dịch vụ sau các bài đăng này, đồng nghĩa với bạn đồng ý chịu sự ràng buộc của các Điều khoản đã được sửa đổi.",
		SERVICE_C_CONTENT_5:
			"Việc thu thập và sử dụng thông tin cá nhân liên quan đến các Dịch vụ của chúng tôi được quy định trong Chính sách về Quyền riêng tư của Glow tại https://glowvietnam.com/privacy-policy/. Glow có thể cung cấp cho nhân viên xử lý yêu cầu bồi thường hoặc doanh nghiệp bảo hiểm mọi thông tin cần thiết (bao gồm thông tin liên lạc của bạn) nếu có yêu cầu bồi thường, tranh chấp hoặc xung đột, có thể bao gồm tai nạn, liên quan đến bạn và một Nhà cung cấp Bên Thứ ba và các thông tin hoặc dữ liệu cần thiết để giải quyết các yêu cầu bồi thường, tranh chấp hoặc xung đột.",
		SERVICE_TITLE_D: "D. Các dịch vụ",
		SERVICE_D_CONTENT:
			"Các Dịch vụ tạo thành một nền tảng công nghệ cho phép người dùng sử dụng các ứng dụng di động của Glow hoặc các trang web được Glow cung cấp như một phần của Dịch vụ (gọi chung là “Ứng dụng”) để sắp xếp và lên lịch trình dịch vụ và/hoặc dịch vụ spa với các nhà cung cấp bên thứ ba độc lập các dịch vụ này, bao gồm cả các nhà cung cấp dịch vụ của bên thứ ba độc lập và các nhà cung spa bên thứ ba độc lập theo thỏa thuận với Glow hoặc một số chi nhánh của Glow (“Nhà cung cấp Bên Thứ ba”). Trừ khi Glow có sự chấp thuận khác trong một thỏa thuận bằng văn bản riêng với bạn, các Dịch vụ này chỉ được cung cấp cho mục đích sử dụng cá nhân, phi thương mại.",
		SERVICE_D_TITLE_1: "Giấy phép ",
		SERVICE_D_TITLE_1_CONTENT:
			"Tùy vào việc tuân thủ theo các Điều khoản này của bạn, Glow sẽ cấp cho bạn giấy phép hữu hạn, không độc quyền, không thể cấp giấy phép con, có thể hủy bỏ và không thể chuyển nhượng để: (i) truy cập và sử dụng các Ứng dụng trên các thiết bị cá nhân chỉ cho mục đích sử dụng Dịch vụ của bạn; và (ii) truy cập và sử dụng bất kỳ nội dung, thông tin và các tài liệu nào liên quan có thể sẵn có thông qua các Dịch vụ, chỉ cho mục đích sử dụng cá nhân, phi thương mại của bạn trong mỗi trường hợp. Mọi quyền lợi không được công nhận rõ ràng bằng văn bản này đều được Glow và tổ chức cấp phép của Glow bảo lưu.",
		SERVICE_D_TITLE_2: "Các giới hạn",
		SERVICE_D_TITLE_2_CONTENT:
			"Bạn không thể: (i) xóa bỏ bất kỳ bản quyền, thương hiệu hoặc thông tin độc quyền khỏi bất kỳ phần nào của Dịch vụ; (ii) xuất bản lại, sửa đổi, tạo ra tác phẩm phái sinh dựa trên, phân phối, cấp phép, cho thuê, bán, bán lại, chuyển nhượng, trưng bày công khai, thực hiện công khai, truyền tải, truyền phát, phát sóng hoặc khai thác các Dịch vụ trừ khi được Glow cho phép; (iii) dịch ngược, đảo ngược hoặc phân tách Dịch vụ trừ khi được luật pháp cho phép; (iv) liên kết đến, ánh xạ hoặc điều chỉnh bất kỳ phần nào của Dịch vụ; (v) gây ra hoặc khởi chạy bất kỳ chương trình hoặc câu lệnh nào với mục đích rút trích, lập chỉ mục, khảo sát, hoặc khai thác dữ liệu trong bất kỳ phần nào của Dịch vụ hoặc khai thác quá tải hoặc cản trở các hoạt động và/hoặc chức năng của bất kỳ phần nào của Dịch vụ; hoặc (vi) cố gắng nắm được quyền truy cập trái phép hoặc gây tổn hại bất kỳ phần nào của Dịch vụ hoặc hệ thống hoặc mạng lưới liên quan đến Dịch vụ.",
		SERVICE_D_TITLE_3: "Các dịch vụ và nội dung của bên thứ ba",
		SERVICE_D_TITLE_3_CONTENT:
			"Các Dịch vụ có thể được cung cấp hoặc truy cập liên quan đến các dịch vụ và nội dung của bên thứ ba (bao gồm cả quảng cáo) mà Glow không kiểm soát. Bạn công nhận rằng các điều khoản khác nhau về sử dụng và chính sách về quyền riêng tư có thể áp dụng đối với việc sử dụng dịch vụ và nội dung của bên thứ ba. Glow không xác nhận các dịch vụ và nội dung của bên thứ ba và trong mọi trường hợp Glow sẽ không chịu trách nhiệm hoặc nghĩa vụ về bất kỳ sản phẩm hoặc dịch vụ nào của các nhà cung cấp bên thứ ba đó. Ngoài ra, Apple Inc., Google, Inc.,và/hoặc các Công ty con và các chi nhánh quốc tế áp dụng của họ sẽ là bên thứ ba được hưởng lợi từ hợp đồng này nếu bạn truy cập vào các Dịch vụ này bằng cách sử dụng các Ứng dụng được phát triển cho các thiết bị di động tương ứng của Apple iOS, và Android. Bên thụ hưởng thứ ba này không phải là các bên tham gia hợp đồng này và không chịu trách nhiệm về việc cung cấp hoặc hỗ trợ các Dịch vụ theo bất kỳ cách nào. Việc bạn truy cập các Dịch vụ bằng cách sử dụng các thiết bị này tuân theo các điều khoản được quy định trong các điều khoản dịch vụ của bên thụ hưởng thứ ba.",
		SERVICE_D_TITLE_4: "Quyền sở hữu",
		SERVICE_D_TITLE_4_CONTENT:
			"Các Dịch vụ và tất cả các quyền trong văn bản này là tài sản của Glow hoặc tài sản của tổ chức cấp phép của Glow. Các Điều khoản này và việc bạn sử dụng các Dịch vụ này không thể hiện hoặc cấp cho bạn các quyền: (i) về hoặc liên quan đến các Dịch vụ này, ngoại trừ giấy phép hữu hạn đã được cấp ở trên; hoặc (ii) sử dụng hoặc tham chiếu tên Công ty, logo, tên sản phẩm và dịch vụ, thương hiệu hoặc nhãn dịch vụ của Glow hoặc của các tổ chức cấp phép của Glow dưới bất kỳ hình thức nào.",
		SERVICE_TITLE_E: "E. Sử dụng dịch vụ Glow",
		SERVICE_E_TITLE_1: "Tài khoản người dùng",
		SERVICE_E_TITLE_1_CONTENT:
			"Để sử dụng hầu hết các khía cạnh của Dịch vụ, bạn phải đăng ký và duy trì hoạt động một tài khoản Dịch vụ người dùng cá nhân (“Tài khoản”). Bạn phải đủ 18 tuổi trở lên, hoặc đủ tuổi trưởng thành theo pháp lý trong khu vực tài phán của mình (nếu tuổi trưởng thành khác 18 tuổi), để có được một Tài khoản. Việc đăng ký tài khoản yêu cầu bạn phải gửi cho Glow các thông tin cá nhân nhất định, chẳng hạn như tên, địa chỉ, số điện thoại di động của bạn và tuổi tác, cũng như tối thiểu một phương thức thanh toán hợp lệ (hoặc thẻ tín dụng hoặc đối tác thanh toán được chấp thuận). Bạn đồng ý duy trì thông tin chính xác, đầy đủ và cập nhật trong Tài khoản của bạn. Việc bạn không duy trì thông tin Tài khoản chính xác, đầy đủ và cập nhật, bao gồm đưa phương thức thanh toán không hợp lệ hoặc hết hạn sử dụng vào trong hồ sơ, có thể dẫn đến việc bạn sẽ không có quyền truy cập và sử dụng Dịch vụ hoặc chấm dứt Thỏa thuận này giữa bạn và Glow . Bạn chịu trách nhiệm đối với tất cả các hoạt động diễn ra trong Tài khoản của bạn, và bạn đồng ý duy trì tính an ninh và bảo mật của tên người dùng và mật khẩu Tài khoản của bạn tại mọi thời điểm. Trừ trường hợp được Glow cho phép bằng văn bản, bạn chỉ có thể sở hữu một Tài khoản",
		SERVICE_E_TITLE_2: "Yêu cầu và ứng xử của người dùng",
		SERVICE_E_TITLE_2_CONTENT_1:
			"Các dịch vụ không được cấp cho người dùng dưới 18 tuổi. Bạn không thể uỷ quyền cho bên thứ ba sử dụng Tài khoản của bạn, và bạn không được phép cho người dưới 18 tuổi nhận các dịch vụ vận chuyển hoặc hậu cần từ Nhà cung cấp Bên Thứ ba trừ khi họ đi cùng bạn. Bạn không được chuyển nhượng hoặc chuyển giao Tài khoản của mình cho bất kỳ cá nhân hoặc thực thể pháp lý nào khác. Bạn đồng ý tuân thủ tất cả các luật áp dụng khi sử dụng các Dịch vụ, và bạn chỉ có thể sử dụng Dịch vụ cho các mục đích hợp pháp. Khi sử dụng các dịch vụ, bạn không được gây phiền toái, khó chịu, bất tiện, hoặc thiệt hại tài sản, cho các Nhà cung cấp Bên Thứ ba hoặc bất kỳ bên nào khác. Trong một số trường hợp bạn có thể được yêu cầu cung cấp giấy tờ chứng minh quyền truy cập hoặc sử dụng dịch vụ, và bạn đồng ý rằng bạn có thể bị từ chối truy cập hoặc sử dụng Dịch vụ nếu bạn từ chối cung cấp giấy tờ chứng minh.",
		SERVICE_E_TITLE_2_CONTENT_2:
			"Mọi hành vi với mục đích lôi kéo khách hàng trên hệ thống của Glow đều bị nghiêm cấm. Lôi kéo khách hàng trên hệ thống của Glow được hiểu là hành động thương lượng riêng với những Khách Hàng của Glow (bao gồm cả nhân viên) để cung cấp các dịch vụ của Glow Việt Nam mà không thông qua hệ thống của Glow. Glow có quyền từ chối phục vụ hay khóa tài khoản mà không cần báo trước đối với những đối tượng có hành vi trên. Với mỗi Khách Hàng (bao gồm cả nhân viên), bạn sẽ phải bồi thường cho Glow 5.000.000 VNĐ/01 người.",
		SERVICE_E_TITLE_2_CONTENT_3:
			"Khách hàng và đối tác phải chịu trách nghiệm dưới pháp luật Việt Nam khi có những hành động quá khích, hành động vi phạm luật pháp. Glow miễn nhiễm trách nhiệm với những hành động của khách hàng với đối tác; đối tác với khách hàng. Trong trường hợp xảy ra kiện tụng, tranh chấp, khách hàng và đối tác sẽ làm việc trực tiếp với nhau, Glow sẽ cung cấp các thông tin cần thiết khi được yêu cầu từ cơ quan có thẩm quyền.",
		SERVICE_E_TITLE_3: "Tin nhắn văn bản",
		SERVICE_E_TITLE_3_CONTENT:
			"Bằng cách tạo một Tài khoản, bạn đồng ý rằng các Dịch vụ có thể gửi cho bạn tin nhắn văn bản thông báo (SMS) như một phần của hoạt động kinh doanh thông thường của việc sử dụng các Dịch vụ. Bạn có thể chọn không nhận tin nhắn văn bản (SMS) từ Glow bất kỳ lúc nào bằng cách gửi email tới support@glowvietnam.com nêu rõ rằng bạn không còn muốn nhận các tin nhắn như vậy, cùng với số điện thoại của thiết bị di động nhận tin nhắn. Bạn công nhận rằng việc chọn không nhận các tin nhắn văn bản (SMS) có thể ảnh hưởng đến việc bạn sử dụng Dịch vụ.",
		SERVICE_E_TITLE_4: "Mã khuyến mãi",
		SERVICE_E_TITLE_4_CONTENT:
			"Glow có thể tùy ý tạo ra các mã khuyến mãi để đổi điểm tín dụng Tài khoản, hoặc các tính năng hoặc lợi ích khác liên quan đến các Dịch vụ này và/hoặc các dịch vụ của một Nhà cung cấp Bên Thứ ba, tùy thuộc vào bất kỳ điều khoản bổ sung nào mà Glow thiết lập trên cơ sở từng mã khuyến mãi (“Mã khuyến mãi”). Bạn đồng ý rằng Mã khuyến mãi: (i) phải được sử dụng cho các đối tượng và mục đích dự định, theo cách phù hợp với pháp luật; (ii) không được sao chép, bán hoặc chuyển giao theo bất kỳ cách nào, hoặc cung cấp công khai (cho dù được đăng lên theo hình thức công khai hoặc bất kỳ hình thức nào khác), trừ khi được sự cho phép của Glow Việt Nam ; (iii) có thể bị Glow vô hiệu hóa bất kỳ lúc nào vì bất kỳ lý do gì mà Glow Việt Nam không phải chịu trách nhiệm; (iv) chỉ có thể được sử dụng theo các điều khoản cụ thể mà Glow Việt Nam thiết lập cho Mã khuyến mãi đó; (v) không có giá trị quy đổi thành tiền mặt; và (vi) có thể hết hạn trước khi bạn sử dụng. Glow có quyền giữ lại hoặc khấu trừ các khoản tín dụng, các tính năng hoặc lợi ích khác thu được thông qua việc sử dụng các Mã khuyến mãi của bạn hoặc bất kỳ người dùng nào khác trong trường hợp Glow xác định được hoặc tin rằng việc sử dụng hoặc đổi thưởng Mã khuyến mãi có lỗi, gian lận, bất hợp pháp, hoặc vi phạm các điều khoản về Mã khuyến mãi được áp dụng hoặc các Điều khoản này.",
		SERVICE_E_TITLE_5: "Nội dung người dùng cung cấp",
		SERVICE_E_TITLE_5_CONTENT_1:
			"Glow có thể tùy ý cho phép bạn gửi, tải lên, công khai hoặc cung cấp cho Glow, thông qua các tính năng văn bản, âm thanh và/hoặc hình ảnh của Dịch vụ, các nội dung và thông tin, bao gồm các nhận xét và phản hồi liên quan đến các Dịch vụ, các yêu cầu hỗ trợ, và nộp các thông tin cho các cuộc thi và chương trình khuyến mãi (“Nội dung Người dùng”) tùy từng thời điểm. Mọi Nội dung Người dùng do bạn cung cấp vẫn là tài sản của bạn. Tuy nhiên, bằng cách cung cấp Nội dung Người dùng cho Glow, bạn cấp cho Glow giấy phép không có bản quyền, không thể thu hồi, chuyển nhượng, sử dụng vĩnh viễn, trên toàn thế giới, với quyền cấp giấy phép con, để sử dụng, sao chép, sửa đổi, tạo ra tác phẩm phái sinh, phân phối, công khai, thực hiện công khai, và khai thác bằng bất kỳ cách nào Nội dung Người dùng trong tất cả các định dạng và các kênh phân phối hiện tại hoặc sau đây được đưa ra (bao gồm liên quan đến các Dịch vụ và hoạt động kinh doanh của Glow và trên các trang web và các dịch vụ của bên thứ ba), mà không cần thông báo thêm cho hoặc có được sự đồng ý của bạn, và không yêu cầu bạn hoặc bất kỳ người nào hoặc tổ chức nào khác phải thanh toán",
		SERVICE_E_TITLE_5_CONTENT_2:
			"Bạn tuyên bố và đảm bảo rằng: (i) bạn là chủ sở hữu duy nhất và độc quyền tất cả các Nội dung Người dùng hoặc bạn có tất cả các quyền, giấy phép, sự chấp thuận và phát hành cần thiết để cấp cho Glow giấy phép Nội dung Người dùng như đã nêu trên; và (ii) Nội dung Người dùng hoặc thông tin bạn nhập, tải lên, công bố hoặc cung cấp Nội dung Người dùng hoặc việc Glow Việt Nam sử dụng Nội dung Người dùng như được cho phép bằng văn bản này sẽ không vi phạm, chiếm đoạt, xâm phạm tài sản trí tuệ hoặc các quyền sở hữu hoặc quyền công khai hoặc riêng tư của một bên thứ ba, hoặc dẫn đến hành vi vi phạm pháp luật hoặc quy định áp dụng.",
		SERVICE_E_TITLE_5_CONTENT_3:
			"Bạn đồng ý không cung cấp Nội dung Người dùng mang tính phỉ báng, bôi nhọ, hận thù, bạo lực, khiêu dâm, tình dục, bất hợp pháp, hoặc gây khó chịu, như được Glow tùy ý xác định, bất kể các tài liệu này có thể được pháp luật bảo vệ hay không. Glow có thể, nhưng không có nghĩa vụ, rà soát, theo dõi, hoặc xóa Nội dung Người dùng, theo toàn quyền quyết định của Glow Việt Nam và vào bất kỳ lúc nào vì bất kỳ lý do nào mà không cần thông báo trước.",
		SERVICE_E_TITLE_6: "Truy cập mạng và thiết bị",
		SERVICE_E_TITLE_6_CONTENT:
			"Bạn chịu trách nhiệm về việc truy cập mạng dữ liệu cần thiết để sử dụng các Dịch vụ. Mạng dữ liệu di động của bạn và mức phí nhắn tin và có thể áp dụng nếu bạn truy cập hoặc sử dụng các Dịch vụ từ một thiết bị không dây được kích hoạt và bạn phải chịu trách nhiệm về mức giá và phí này. Bạn chịu trách nhiệm thu thập và cập nhật phần cứng tương thích hoặc các thiết bị cần thiết để truy cập và sử dụng các Dịch vụ và Ứng dụng này và bất kỳ bản cập nhật nào. Glow không đảm bảo rằng các Dịch vụ, hoặc bất kỳ phần nào trong đó, sẽ hoạt động trên bất kỳ phần cứng hoặc các thiết bị cụ thể nào. Ngoài ra, các Dịch vụ có thể bị trục trặc và chậm trễ vốn thường gặp trong việc sử dụng Internet và các phương tiện liên lạc điện tử.",
		SERVICE_TITLE_F: "F. Thanh toán",
		SERVICE_F_CONTENT_1:
			"Bạn hiểu rằng việc sử dụng các Dịch vụ có thể phát sinh chi phí cho các dịch vụ hoặc hàng hóa mà bạn nhận được từ một Nhà cung cấp Bên Thứ ba (“Phí”). Sau khi bạn nhận được dịch vụ hoặc hàng hóa thông qua việc sử dụng Dịch vụ, Glow sẽ tạo điều kiện thanh toán các khoản Phí được áp dụng thay mặt Nhà cung cấp Bên Thứ ba như đại lý thu nhận thanh toán của Nhà cung cấp Bên Thứ ba. Thanh toán các khoản Phí theo cách này sẽ được coi như thanh toán được bạn thực hiện trực tiếp cho các Nhà cung cấp Bên Thứ ba. Các khoản Phí sẽ bao gồm thuế được áp dụng nếu có yêu cầu của pháp luật. Các khoản Phí mà bạn trả là cuối cùng và không được hoàn lại, trừ trường hợp được Glow quyết định. Bạn vẫn có quyền yêu cầu Phí thấp hơn từ một Nhà cung cấp Bên Thứ ba cho các dịch vụ, hàng hóa nhận được từ Nhà cung cấp Bên Thứ ba tại thời điểm nhận dịch vụ, hàng hoá. Glow sẽ phản hồi mọi yêu cầu từ Nhà cung cấp Bên Thứ ba để thay đổi Phí cho một dịch vụ hoặc hàng hóa cụ thể.",
		SERVICE_F_CONTENT_2:
			"Tất cả các khoản Phí phải trả ngay lập tức và việc thanh toán sẽ được tạo điều kiện bởi Glow Việt Nam bằng cách sử dụng phương thức thanh toán ưa thích được chỉ định trong Tài khoản của bạn. Nếu phương thức thanh toán Tài khoản chính của bạn được xác định là đã hết hạn, không hợp lệ hoặc không thể tính phí, bạn đồng ý rằng Glow có thể, trong vai trò là đại lý thu nhận thanh toán của Nhà cung cấp Bên Thứ ba, sử dụng phương thức thanh toán thứ hai trong Tài khoản của bạn, nếu có.",
		SERVICE_F_CONTENT_3:
			"Giữa bạn và Glow, Glow có quyền tùy ý thiết lập, xóa và/hoặc sửa đổi Phí đối với bất kỳ hoặc tất cả các dịch vụ hoặc hàng hóa nhận được thông qua việc sử dụng Dịch vụ tại bất kỳ thời điểm nào. Hơn nữa, bạn công nhận và đồng ý rằng Phí áp dụng tại các khu vực địa lý nhất định có thể tăng đáng kể trong thời gian nhu cầu cao. Glow sẽ nỗ lực thông báo cho bạn về những khoản phí có thể được áp dụng, với điều kiện là bạn sẽ chịu trách nhiệm cho các khoản Phí phát sinh theo Tài khoản của bạn bất kể bạn có biết về các khoản Phí hoặc các khoản tiền đó hay không. Tùy từng thời điểm, Glow có thể cung cấp cho người dùng nhất định các chương trình khuyến mãi và giảm giá có thể dẫn đến việc tính phí các khoản tiền khác nhau cho cùng dịch vụ hoặc hàng hóa hay các dịch vụ hoặc hàng hóa tương tự nhận được thông qua việc sử dụng các Dịch vụ này, và bạn đồng ý rằng các chương trình khuyến mãi giảm giá như vậy sẽ không liên quan đến việc bạn sử dụng các Dịch vụ hoặc các khoản Phí áp dụng đối với bạn, trừ khi cũng được cung cấp cho bạn. Bạn có thể chọn hủy bỏ yêu cầu về các dịch vụ hoặc hàng hóa từ một Nhà cung cấp Bên Thứ ba bất kỳ lúc nào trước khi Nhà cung cấp Bên Thứ ba thực hiện dịch vụ, trong trường hợp này bạn có thể phải trả một khoản phí hủy bỏ dịch vụ",
		SERVICE_F_CONTENT_4:
			"Cơ cấu thanh toán này được thiết kế để bù đắp đầy đủ cho các Nhà cung cấp Bên Thứ ba đối với các dịch vụ, hàng hóa được cung cấp. Glow không chỉ định bất kỳ phần nào trong thanh toán của bạn làm tiền boa hoặc tiền thưởng cho các Nhà cung cấp Bên Thứ ba. Bất kỳ tuyên bố nào của Glow (trên trang web của Glow, trong Ứng dụng, hoặc trong các tài liệu tiếp thị của Glow) có mục đích nói rằng tiền boa là “tự nguyện”, “không bắt buộc” và/hoặc “được bao gồm” trong các khoản thanh toán của bạn cho các dịch vụ, hàng hóa được cung cấp không có dụng ý cho thấy rằng Glow sẽ cung cấp bất kỳ khoản tiền bổ sung nào, ngoài những khoản mô tả ở trên, cho các Nhà cung cấp Bên Thứ ba. Bạn hiểu và đồng ý rằng, khi bạn được tùy ý cung cấp khoản thanh toán bổ sung làm khoản tiền thưởng cho bất kỳ Nhà cung cấp Bên Thứ ba nào cung cấp cho bạn các dịch vụ hoặc hàng hóa nhận được qua Dịch vụ này, bạn không có nghĩa vụ phải làm như vậy. Tiền thưởng là tự nguyện. Sau khi bạn nhận được các dịch vụ hoặc hàng hóa qua Dịch vụ này, bạn sẽ có cơ hội đánh giá trải nghiệm của bạn và để lại phản hồi thêm về Nhà cung cấp Bên Thứ ba.",
		SERVICE_TITLE_G: "G. Tuyên bố miễn trách nhiệm",
		SERVICE_G_CONTENT:
			'Các dịch vụ được cung cấp "nguyên trạng" và "như sẵn có". Glow khước từ mọi tuyên bố và bảo đảm, rõ ràng, ngụ ý hoặc theo luật định, không được nêu rõ trong những điều khoản này, bao gồm các bảo đảm về khả năng thương mại, tính phù hợp cho một mục đích cụ thể và không vi phạm pháp luật. Ngoài ra, Glow không đưa ra tuyên bố, bảo hành, bảo đảm về tính tin cậy, tính kịp thời, chất lượng, tính phù hợp hoặc sẵn có của các dịch vụ này, các dịch vụ hoặc hàng hóa được yêu cầu qua việc sử dụng dịch vụ này, hoặc các dịch vụ này sẽ không bị gián đoạn hoặc không có lỗi. Glow Việt Nam không đảm bảo chất lượng, tính phù hợp, an toàn hoặc năng lực của nhà cung cấp bên thứ ba. Bạn đồng ý chịu trách nhiệm về toàn bộ rủi ro phát sinh bên ngoài việc sử dụng các dịch vụ này và bất kỳ dịch vụ hoặc hàng hóa được yêu cầu nào có liên quan, trong phạm vi tối đa pháp luật áp dụng cho phép.',
		SERVICE_TITLE_H: "H. Giới hạn trách nhiệm",
		SERVICE_H_CONTENT_1:
			"Glow sẽ không chịu trách nhiệm về các thiệt hại mang tính gián tiếp, ngẫu nhiên, đặc biệt, cảnh cáo, trừng trị hoặc hậu quả, bao gồm tổn thất về lợi nhuận, tổn thất về dữ liệu, thương tích cá nhân hoặc thiệt hại về tài sản, liên quan, hoặc phát sinh từ việc sử dụng các dịch vụ, ngay cả nếu glow đã được cảnh báo về nguy cơ của các thiệt hại như vậy. glow việt nam sẽ không chịu trách nhiệm cho bất kỳ thiệt hại, trách nhiệm hoặc tổn thất nào phát sinh do:",
		SERVICE_H_CONTENT_2:
			"(i) việc bạn sử dụng hoặc dựa trên các dịch vụ hoặc bạn không có quyền truy cập hoặc sử dụng dịch vụ; hoặc",
		SERVICE_H_CONTENT_3:
			"(ii) mọi giao dịch hoặc quan hệ giữa bạn và nhà cung cấp bên thứ ba, ngay cả nếu glow đã được cảnh báo về nguy cơ của các thiệt hại như vậy. glow sẽ không chịu trách nhiệm về việc trì hoãn hoặc không hoạt động do các nguyên nhân nằm ngoài khả năng kiểm soát của glow việt nam. bạn công nhận rằng nhà cung cấp dịch vụ bên thứ ba cung cấp các dịch vụ được yêu cầu qua một số thương hiệu yêu cầu có thể cung cấp dịch vụ dùng chung hoặc khách hàng đồng cấp và có thể không được cấp phép hoặc cho phép hoạt động một cách chuyên nghiệp. trong mọi trường hợp glow không chịu trách nhiệm pháp lý đối với bạn liên quan tới các dịch vụ về mọi thiệt hại, tổn thất và các nguyên nhân tố tụng",
		SERVICE_H_CONTENT_4:
			"các giới hạn và tuyên bố miễn nhiệm trong phần này không nhằm giới hạn trách nhiệm hoặc thay thế các quyền của người tiêu dùng không thể loại trừ theo pháp luật.",
		SERVICE_TITLE_I: "I. Bồi thường",
		SERVICE_I_CONTENT:
			"Bạn đồng ý bồi thường và giữ cho Glow và các cán bộ, giám đốc, nhân viên và đại lý vô hại khỏi bất kỳ và tất cả các yêu cầu bồi thường, yêu cầu, trách nhiệm pháp lý, và các chi phí (bao gồm chi phí luật sư) phát sinh từ hoặc liên quan đến: (i) bạn sử dụng các Dịch vụ này, dịch vụ hoặc các sản phẩm nhận được thông qua việc sử dụng các Dịch vụ này; (ii) bạn phá vỡ hoặc vi phạm các Điều khoản này; (iii) Glow sử dụng Nội dung Người dùng; hoặc (iv) bạn vi phạm các quyền của bất kỳ bên thứ ba nào, bao gồm Nhà cung cấp Bên Thứ ba.",

		REGULATION_TITLE: "Quy chế hoạt động",
		REGULATION_UPDATE: "Cập nhật lần cuối: ngày 1 tháng 4 năm 2023",
		REGULATION_CONTENT:
			"Ứng dụng Glow là sàn thương mại điện tử phục vụ nhu cầu kết nối giữa người /tổ chức cung cấp dịch vụ Spa Massage, Mẹ và bé, lấy ráy tai, tẩy lông, makeup, fitness, nha khoa, thú cưng, phòng khám, thẩm mỹ viện (“Dịch vụ”) và người có nhu cầu sử dụng dịch vụ này. Ứng dụng Glow được xây dựng nhằm hỗ trợ tối đa cho người dùng muốn tìm hiểu thông tin trực tuyến về nhiều loại dịch vụ khác nhau hoặc có nhu cầu đặt dịch vụ trực tuyến.",
		REGULATION_I: "I.Nguyên tắc chung",
		REGULATION_I_CONTENT_1:
			"Sàn giao dịch điện tử Glow/ Ứng dụng Glow do CÔNG TY CỔ PHẦN CÔNG NGHỆ BK VIỆT NAM (Công ty) xây dựng, thực hiện hoạt động và vận hành.",
		REGULATION_I_CONTENT_2:
			"Bên cung cấp dịch vụ trên sàn giao dịch điện tử Glow là các cá nhân/tổ chức có hoạt động kinh doanh dịch vụ Spa, Massage, Trị liệu, Làm đẹp hợp pháp được Các cơ quan có thẩm quyền cấp phép và được cung cấp dịch vụ tại Sàn giao dịch Thương mại điện tử Glow theo quy chế của Sàn giao dịch Thương mại điện tử Glow.",
		REGULATION_I_CONTENT_3:
			"Bên sử dụng dịch vụ là các cá nhân có nhu cầu sử dụng dịch vụ dịch vụ Spa, Massage, Trị liệu, Làm đẹp thông qua việc đặt dịch vụ trực tuyến tại Sàn giao dịch Thương mại điện tử Glow.",
		REGULATION_I_CONTENT_4:
			"Thương nhân, tổ chức, cá nhân tham gia giao dịch tại Sàn giao dịch Thương mại điện tử Glow tự do thỏa thuận trên cơ sở tôn trọng quyền và lợi ích hợp pháp của các bên tham gia hoạt động sử dụng dịch vụ thông qua hợp đồng, không trái với quy định pháp luật.",
		REGULATION_I_CONTENT_5:
			"Thông tin về thương nhân, tổ chức, tham gia là người dùng trên Glow phải minh bạch và chính xác.",
		REGULATION_I_CONTENT_6:
			"Dịch vụ tham gia giao dịch trên Sàn giao dịch Thương mại điện tử Glow phải đáp ứng đầy đủ các quy định của pháp luật có liên quan, không thuộc các trường hợp cấm kinh doanh, cấm quảng cáo theo quy định của pháp luật.",
		REGULATION_I_CONTENT_7:
			"Giao dịch qua Sàn giao dịch Thương mại điện tử Glow phải được thực hiện công khai, minh bạch, đảm bảo quyền lợi của khách hàng/người sử dụng dịch vụ.",
		REGULATION_I_CONTENT_8:
			"Tất cả các nội dung trong Quy chế này phải tuân thủ theo hệ thống pháp luật hiện hành của Việt Nam. Người dùng khi tham gia vào Sàn giao dịch TMĐT Glow phải tự tìm hiểu trách nhiệm pháp lý của mình đối với luật pháp hiện hành của Việt Nam và cam kết thực hiện đúng những nội dung trong Quy chế của Sàn giao dịch TMĐT Glow.",

		REGULATION_II: "II. Quy định chung",
		REGULATION_II_CONTENT_1:
			"Tên Giao dịch Thương mại Điện tử: Sàn giao dịch TMĐT Glow do CÔNG TY CỔ PHẦN CÔNG NGHỆ BK VIỆT NAM  phát triển với tên ứng dụng Sàn giao dịch là: Glow (sau đây gọi tắt là: “Glow”).",
		REGULATION_II_CONTENT_2: " Định nghĩa chung:",
		REGULATION_II_CONTENT_3:
			" - Kỹ thuật viên: Là bên cung cấp dịch vụ, là cá nhân/tổ chức có nhu cầu cung cấp dịch vụ Spa, Massage, Trị liệu, Làm đẹp tại Glow bằng cách đăng thông tin về dịch vụ Spa, Massage, Trị liệu, Làm đẹp.",
		REGULATION_II_CONTENT_4:
			" - Khách hàng: là bên sử dụng dịch vụ, là thương nhân, tổ chức, cá nhân có nhu cầu sử dụng dịch vụ được đăng tải trên Glow.",
		REGULATION_II_CONTENT_5: " -	Người dùng: là thành viên của Glow, bao gồm cả Kỹ thuật viên và Khách hàng",
		REGULATION_II_CONTENT_6:
			"Người dùng tham gia giao dịch trên Glow là thương nhân, tổ chức, cá nhân có nhu cầu sử dụng dịch vụ tại Glow.",
		REGULATION_II_CONTENT_7:
			"Người dùng phải đăng ký kê khai ban đầu các thông tin cá nhân có liên quan, được Ban quản lý Glow chính thức công nhận và được phép sử dụng dịch vụ do Glow cung cấp.",
		REGULATION_II_CONTENT_8: "Khi bạn đăng ký là người dùng của Glow, người dùng hiểu rằng: ",
		REGULATION_II_CONTENT_9: " - Người dùng có thể tạo một tài khoản cá nhân của mình để sử dụng.",
		REGULATION_II_CONTENT_10:
			"-	Người dùng có thể đặt lịch để dịch vụ theo đúng giá và quy chuẩn theo đúng cam kết của thương nhân hợp pháp đã công bố trên Glow.",
		REGULATION_II_CONTENT_11:
			"Nội dung bản Quy chế này tuân thủ theo các quy định hiện hành của Việt Nam. Người dùng khi tham gia vào Glow phải tự tìm hiểu trách nhiệm pháp lý của mình đối với luật pháp hiện hành của Việt Nam và cam kết thực hiện đúng những nội dung trong Glow.",
		REGULATION_III: "III. Quy trình giao dịch",
		REGULATION_III_1: "1. Quy trình dành cho khách hàng",
		REGULATION_III_1_CONTENT_1: "- Khi có nhu cầu mua hàng trên Glow khách hàng nên thực hiện các bước sau đây: ",
		REGULATION_III_1_CONTENT_2: "Tìm kiếm, tham khảo thông tin dịch vụ ",
		REGULATION_III_1_CONTENT_3:
			"- Khách hàng sẽ được lựa chọn và đặt lịch theo thông tin của các Kỹ thuật viên, sau khi lựa chọn xong nhấn vào nút đặt lịch, điền thông tin và tiến hành thanh toán",
		REGULATION_III_1_CONTENT_4: "Kỹ thuật viên sẽ tiến hành liên hệ khách hàng để xác nhận lịch.",
		REGULATION_III_2: "2.	Quy trình dành cho Kỹ thuật viên và Ban Quản trị Sàn Glow",
		REGULATION_III_21: "2.1. Tạo tài khoản",
		REGULATION_III_21_CONTENT: " - Đăng ký tài khoản: Kỹ thuật viên đăng ký tài khoản trên ứng dụng Glow. ",
		REGULATION_III_22: "2.2. Đăng kí cung cấp dịch vụ",
		REGULATION_III_22_CONTENT_1: "- Kỹ thuật viên vào phần đăng ký để đăng ký trở thành Đối tác",
		REGULATION_III_22_CONTENT_2: "- Kỹ thuật viên điền đầy đủ thông tin cá nhân",
		REGULATION_III_22_CONTENT_3: "Chọn Lưu để lưu thông tin cá nhân.",
		REGULATION_III_23: "2.3. Quy trình dành cho ban quản trị Sàn Glow",
		REGULATION_III_23_CONTENT_1: "Các thông tin sẽ được lưu trên trang quản trị và hiển thị trên ứng dụng Glow.",
		REGULATION_III_23_CONTENT_2:
			"Ban quản trị có công tác hậu kiểm kết hợp với công cụ lọc từ khóa để kiểm duyệt các thông tin của Người dùng, Kỹ thuật viên",
		REGULATION_III_3: "3. Chính sách đổi trả, hoàn tiền",
		REGULATION_III_3_CONTENT_1:
			"Glow không phải là người cung cấp dịch vụ nên việc đổi trả dịch vụ sẽ được thực hiện theo chính sách của từng Kỹ thuật viên .",
		REGULATION_III_3_CONTENT_2:
			"Glow yêu cầu Kỹ thuật viên khi đăng thông tin về dịch vụ phải đưa đầy đủ thông tin về dịch vụ.",
		REGULATION_III_3_CONTENT_3:
			"Glow khuyến cáo người dùng phải đọc kỹ thông tin, hoặc gọi điện trực tiếp cho kỹ thuật viên tìm hiểu về dịch vụ trước khi tiến hành đặt lịch.",
		REGULATION_III_3_CONTENT_4: "Glow sẽ hỗ trợ người dùng trong khả năng cho phép về việc đổi, hoàn tiền.",
		REGULATION_III_4: "4. Quy trình hỗ trợ giải quyết tranh chấp, khiếu nại",
		REGULATION_III_4_CONTENT_1:
			" Bước 1: Người dùng khiếu nại về dịch vụ của Kỹ thuật viên qua email: binh.do@glowvietnam.com, Người dùng người dùng có thể phản ánh trực tiếp đến đển ban quản trị. CÔNG TY CỔ PHẦN CÔNG NGHỆ BK VIỆT NAM",
		REGULATION_III_4_CONTENT_2:
			" Bước 2: Bộ phận Chăm Sóc Khách Hàng của Glow sẽ tiếp nhận các khiếu nại của người dùng người dùng, tùy theo tính chất và mức độ của khiếu nại thì bên Glow, sẽ có những biện pháp cụ thể hỗ trợ người dùng để giải quyết tranh chấp đó.",
		REGULATION_III_4_CONTENT_3:
			" Bước 3: Trong trường hợp nằm ngoài khả năng và thẩm quyền của Glow thì Ban quản trị sẽ yêu cầu khách hàng đưa vụ việc này ra cơ quan nhà nước có thẩm quyền giải quyết theo pháp luật.",
		REGULATION_III_4_CONTENT_4: " Người dùng gửi khiếu nại tại địa chỉ :",
		REGULATION_III_4_CONTENT_5: " CÔNG TY CỔ PHẦN CÔNG NGHỆ BK VIỆT NAM",
		REGULATION_III_4_CONTENT_6:
			" Địa chỉ: Tầng 14, số 169 Nguyễn Ngọc Vũ, Phường Trung Hoà, Quận Cầu Giấy, Thành phố Hà Nội, Việt Nam",
		REGULATION_III_4_CONTENT_7: " Tel: 0888129100 ",
		REGULATION_III_4_CONTENT_8: " Email: binh.do@glowvietnam.com",
		REGULATION_III_4_CONTENT_9: " Quy định khiếu nại, cảnh báo, tranh chấp",
		REGULATION_III_4_CONTENT_10: " Tất cả các bài đăng phải đủ các điều kiện dưới đây nếu không sẽ bị khóa:",
		REGULATION_III_4_CONTENT_11: " Đối tượng bị phản ánh là người dùng Glow;",
		REGULATION_III_4_CONTENT_12: " Sự việc phải liên quan đến bài viết của người dùng đó trên Glow;",
		REGULATION_III_4_CONTENT_13: " Phải có bằng chứng cụ thể; ",
		REGULATION_III_4_CONTENT_14: " Không có ngôn từ xúc phạm, chửi tục, hăm dọa;",
		REGULATION_III_4_CONTENT_15: " Khi khiếu nại phải đưa ra bằng chứng cụ thể, rõ ràng, đồng thời phải có :",
		REGULATION_III_4_CONTENT_16: " Tài khoản của người khiếu nại.",
		REGULATION_III_4_CONTENT_17: " Đường liên kết dẫn chứng liên quan",
		REGULATION_III_4_CONTENT_18:
			" Glow tôn trọng và nghiêm túc thực hiện các quy định của pháp luật về bảo vệ quyền lợi của khách hàng (người dùng). Vì vậy, đề nghị các người dùng đăng tin dịch vụ trên sàn cung cấp đầy đủ, chính xác, trung thực và chi tiết các thông tin liên quan đến dịch vụ. Mọi hành vi lừa đảo, gian lận trong kinh doanh đều bị lên án và phải chịu hoàn toàn trách nhiệm trước pháp luật.",
		REGULATION_III_4_CONTENT_19:
			" Các bên bao gồm Kỹ thuật viên, Người dùng sẽ phải có vai trò trách nhiệm trong việc tích cực giải quyết vấn đề. Đối với Kỹ thuật viên cần có trách nhiệm cung cấp văn bản giấy tờ chứng thực thông tin liên quan đến sự việc đang gây mâu thuẫn cho Người dùng . Đối với Glow sẽ có trách cung cấp những thông tin liên quan đến Người dùng và Kỹ thuật viên nếu được người dùng hoặc người liên quan đến tranh chấp đó yêu cầu.",
		REGULATION_III_4_CONTENT_20:
			" Sau khi Kỹ thuật viên, người dùng đã giải quyết xong tranh chấp phải có trách nhiệm thông báo lại cho ban quản trị Glow. Trong trường hợp giao dịch phát sinh mâu thuẫn mà lỗi thuộc về Kỹ thuật viên Glow sẽ có biện pháp cảnh cáo, khóa tài khoản hoặc chuyển cho cơ quan pháp luật có thẩm quyền tùy theo mức độ của sai phạm Glow sẽ chấm dứt và gỡ bỏ toàn bộ thông tin về dịch vụ của Kỹ thuật viên đó trên Glow đồng thời yêu cầu Kỹ thuật viên bồi hoàn cho khách hàng thỏa đáng trên cơ sở thỏa thuận với người dùng.",
		REGULATION_III_4_CONTENT_21:
			" Nếu thông qua hình thức thỏa thuận mà vẫn không thể giải quyết được mâu thuẫn phát sinh tử giao dịch giữa hai bên Người dùng, Kỹ thuật viên, thì một trong hai bên Người dùng và Kỹ thuật viên sẽ có quyền nhờ đến cơ quan pháp luật có thẩm quyền can thiệp nhằm đảm bảo lợi ích hợp pháp của các bên nhất là cho người dùng.",
		REGULATION_IV: "IV. Quy trình thanh toán",
		REGULATION_IV_1:
			"1. Thanh toán phần trăm chiết khấu đơn hàng giữa Kỹ thuật viên và chủ sở hữu Sàn giao dịch Glow",
		REGULATION_IV_1_CONTENT:
			"Đối với Kỹ thuật viên (người cung cấp dịch vụ): Với mỗi đơn hàng thành công trên hệ thống Glow, Glow sẽ thu phí 20% - 40% từ người dùng cung cấp dịch vụ. Khoản phí là rất quan trọng với Glow để duy trì hệ thống và quảng bá thương hiệu",
		REGULATION_IV_2: "2. Thanh toán giữa Người dùng và Kỹ thuật viên",
		REGULATION_IV_2_CONTENT_1:
			"Người dùng và Kỹ thuật viên thực hiện các thanh toán thông qua Glow và theo các phương thức thanh toán do Glow quy định.",
		REGULATION_IV_2_CONTENT_2: "Khách hàng có thể thanh toán qua Số dư Glow",
		REGULATION_IV_2_CONTENT_3:
			"Đối với phương thức thanh toán bằng Số dư Glow,  Khách hàng sẽ nạp tiền vào Số dư Glow. Bấm vào nạp tiền, giao diện nạp tiền bao gồm giá trị nạp và hình thức nạp tiền (qua Chuyển khoản ngân hàng, Visa)",
		REGULATION_IV_2_CONTENT_4: "Nếu muốn rút tiền từ Số dư Glow Quý khách vui lòng liên hệ Sàn TMĐT Glow.",
		REGULATION_IV_2_CONTENT_5:
			"Địa chỉ: Tầng 14, số 169 Nguyễn Ngọc Vũ, Phường Trung Hoà, Quận Cầu Giấy, Thành phố Hà Nội, Việt Nam",
		REGULATION_IV_3: "3. Đảm bảo an toàn giao dịch",
		REGULATION_IV_3_CONTENT_1:
			" Để đảm bảo các giao dịch được tiến hành thành công, hạn chế tối đa rủi ro có thể phát sinh.",
		REGULATION_IV_3_CONTENT_2:
			" Kỹ thuật viên phải cung cấp thông tin đầy đủ (tên, địa chỉ, số điện thoại, email) trên phần thông tin cá nhân.",
		REGULATION_IV_3_CONTENT_3:
			" Người dùng không nên đưa thông tin chi tiết về việc thanh toán với bất kỳ ai bằng email hoặc hình thức liên lạc khác, Glow không chịu trách nhiệm về những thiệt hạy hay rủi ro người dùng có thể gánh chịu trong việc trao đổi thông tin của người dùng qua Internet hoặc email.",
		REGULATION_IV_3_CONTENT_4:
			" Người dùng tuyệt đối không sử dụng bất kỳ chương trình, công cụ hay hình thức nào khác để can thiệp vào hệ thống hay làm thay đổi cấu trúc dữ liệu. Nghiêm cấm việc phát tán, truyền bá hay cổ vũ cho bất kỳ hoạt động nào nhằm can thiệp, phá hoại hay xâm nhập hệ thống website. Mọi vi phạm sẽ bị xử lý theo Quy chế và quy định của pháp luật.",
		REGULATION_IV_3_CONTENT_5:
			" Mọi thông tin giao dịch được bảo mật, trừ trường hợp buộc phải cung cấp khi Cơ quan pháp luật yêu cầu.",
		REGULATION_V: "V. Chính sách Bảo vệ thông tin cá nhân người dùng",
		REGULATION_V_1: "1. Mục đích và phạm vi thu thập",
		REGULATION_V_1_CONTENT_1: " Các thông tin thu thập khi đăng ký tài khoản trên ứng dụng Glow:",
		REGULATION_V_1_CONTENT_2:
			" - Kỹ thuật viên, người cung cấp: khi kỹ thuật viên muốn có tài khoản trên Sàn Glow, kỹ thuật viên đăng ký trên ứng dụng Glow, cần cung cấp đầy đủ thông tin số điện thoại, mail, tên, mật khẩu đăng nhập.",
		REGULATION_V_1_CONTENT_3:
			" - Người dùng, người sử dụng: người dùng đăng ký tài khoản trên ứng dụng Glow, cần cung cấp thông tin số điện thoại, mail, tên, mật khẩu đăng nhập.",
		REGULATION_V_1_CONTENT_4: " Trong quá trình sử dụng:",
		REGULATION_V_1_CONTENT_5:
			" - Kỹ thuật viên, người cung cấp: kỹ thuật viên sẽ cung cấp thông tin của dịch vụ đang cung cấp và kỹ thuật viên sẽ phải thường xuyên cập nhật địa chỉ, thông tin liên hệ hiện thời",
		REGULATION_V_1_CONTENT_6:
			" - Người dùng, người sử dụng: nếu người dùng chọn dịch vụ tại nhà hay bất kì địa điểm nào khác, người dùng sẽ phải cung cấp địa chỉ, thông tin liên hệ.",
		REGULATION_V_1_CONTENT_7: " - Các thông tin được người dùng cung cấp có thể dùng vào các mục đích sau:",
		REGULATION_V_1_CONTENT_8: " + Cung cấp dịch vụ trên Ứng dụng Glow mà người dùng yêu cầu;",
		REGULATION_V_1_CONTENT_9: " + Gửi thông tin giới thiệu dịch vụ trên Ứng dụng Glow đến người dùng mới;",
		REGULATION_V_1_CONTENT_10:
			" + Phân tích, đánh giá và hoàn thiện dịch vụ (kể cả Ứng dụng), công nghệ, quy trình;",
		REGULATION_V_1_CONTENT_11: " + Nâng cao mối tương tác và liên kết với người ;",
		REGULATION_V_1_CONTENT_12:
			" + Giải quyết các vấn đề tranh chấp, khiếu nại phát sinh liên quan đến việc sử dụng Ứng dụng Glow;",
		REGULATION_V_1_CONTENT_13: " + Ngăn chặn những hoạt động vi phạm pháp luật tại Việt Nam.",
		REGULATION_V_1_CONTENT_14:
			" - Nếu không có sự đồng ý của người dùng, Glow sẽ không cung cấp bất kỳ thông tin nào liên quan đến người dùng cho bên thứ ba để sử dụng với mục đích quảng cáo. ",
		REGULATION_V_2: "2. Những người dùng được tiếp cận thông tin",
		REGULATION_V_2_CONTENT_1:
			" Người dùng đồng ý rằng: trong trường hợp cần thiết, các cơ quan/tổ chức/cá nhân sau có quyền được tiếp cận và thu thập các thông tin cá nhân của người dùng, bao gồm:",
		REGULATION_V_2_CONTENT_2: " - Kỹ thuật viên/người cung cấp",
		REGULATION_V_2_CONTENT_3: " - Bên cung cấp dịch vụ thanh toán",
		REGULATION_V_2_CONTENT_4: " - Bộ phận chăm sóc khách hàng",
		REGULATION_V_2_CONTENT_5: " - Ban Quản Trị Sàn Glow",
		REGULATION_V_2_CONTENT_6: " - Cơ quan nhà nước có thẩm quyền (trong trường hợp có yêu cầu của pháp luật)",
		REGULATION_V_2_CONTENT_7: " - Bên khiếu nại chứng minh được hành vi vi phạm của Người dùng (nếu có) ",
		REGULATION_V_3: "3. Địa chỉ của đơn vị chủ quản Sàn Glow:",
		REGULATION_V_3_CONTENT_1: " CÔNG TY CỔ PHẦN CÔNG NGHỆ BK VIỆT NAM",
		REGULATION_V_3_CONTENT_2:
			" Địa chỉ: Tầng 14, số 169 Nguyễn Ngọc Vũ, Phường Trung Hoà, Quận Cầu Giấy, Thành phố Hà Nội, Việt Nam",
		REGULATION_V_3_CONTENT_3: " Tel: 0888129100",
		REGULATION_V_3_CONTENT_4: " Email: binh.do@glowvietnam.com ",
		REGULATION_V_4: " 4. Thời gian lưu trữ",
		REGULATION_V_4_CONTENT_2:
			"+	Các thông tin của người dùng được lưu trữ trong một thời gian cần thiết, nhằm phục vụ cho các yêu cầu người đưa ra.",
		REGULATION_V_4_CONTENT_1:
			" + Người dùng có thể yêu cầu Glow xóa dữ liệu cá nhân khi đã chấm dứt là người dùng của Ứng dụng Glow. + Các thông tin của người dùng được lữu trữ trong một thời gian cần thiết, nhằm phục vụ cho các yêu cầu người đưa ra.",
		REGULATION_V_5: " 5. Phương thức thay đổi thông tin cá nhân",
		REGULATION_V_5_CONTENT_1:
			" Người được cấp một tài khoản bao gồm tên tài khoản và mật khẩu để truy cập Ứng dụng Glow. Sau khi đăng nhập, người dùng có thể chỉnh sửa thông tin cá nhân.",
		REGULATION_V_5_CONTENT_2:
			" Ứng dụng Glow cam kết sẽ bảo mật các thông tin của người dùng, nỗ lực và sử dụng các biện pháp thích hợp để bảo mật các thông tin mà người dùng cung cấp cho Ứng dụng Glow trong quá trình sử dụng dịch vụ trên Ứng dụng Glow. ",
		REGULATION_V_5_CONTENT_3:
			" Không bán, chuyển giao dữ liệu thông tin cho bên thứ ba, khi chưa được sự cho phép của người dùng ngoại trừ trường hợp theo yêu cầu cung cấp thông tin người dùng của cơ quan nhà nước có thẩm quyền bằng văn bản hoặc pháp luật có quy định khác.",
		REGULATION_V_5_CONTENT_4:
			" Trong trường hợp máy chủ lưu trữ thông tin người dùng bị tấn công dẫn đến mất dữ liệu người dùng, Ứng dụng Glow sẽ có trách nhiệm thông báo vụ việc cho cơ quan chức năng điều tra xử lý kịp thời và thông báo cho người dùng được biết.",
		REGULATION_V_5_CONTENT_5:
			" Nếu xét thấy thông tin của người dùng cung cấp trên Ứng dụng Glow là không chính xác, Ứng dụng Glow sẽ tiến hành hủy toàn bộ những nội dung của người dùng đó được đăng tải trên Ứng dụng Glow.",
		REGULATION_V_5_CONTENT_6: " Người dùng cần cung cấp thông tin trong các trường hợp sau:",
		REGULATION_V_5_CONTENT_7: " - Truy cập, đặt mua, sử dụng dịch vụ Ứng dụng Glow;",
		REGULATION_V_5_CONTENT_8: " - Yêu cầu báo giá, cung cấp thông tin, dịch vụ hoặc hỗ trợ;",
		REGULATION_V_5_CONTENT_9:
			" - Tham gia khảo sát ý kiến, dự thi có thưởng, hoặc các hoạt động khuyến mại, quảng bá khác;",
		REGULATION_V_5_CONTENT_10: " - Đăng ký nhận tin thư, email quảng cáo hoặc các loại tin tức khác;",
		REGULATION_V_5_CONTENT_11: " - Đăng ký tham dự tuyển dụng, gửi hồ sơ, lý lịch;",
		REGULATION_V_5_CONTENT_12:
			" - Việc thu thập và sử dụng thông tin người dùng chỉ được thực hiện khi có sự đồng ý của người dùng bằng cách đăng ký tài khoản trên Ứng dụng Glow. ",
		REGULATION_V_6:
			" 6. Cơ chế tiếp nhận khiếu nại liên quan đến việc thông tin cá nhân bị sử dụng sai mục đích hoặc phạm vi đã thông báo",
		REGULATION_V_6_CONTENT_0:
			"Thông tin cá nhân của người dùng được cam kết bảo mật tuyệt đối theo chính sách bảo vệ thông tin cá nhân. Việc thu thập và sử dụng thông tin của mỗi người dùng chỉ được thực hiện khi có sự đồng ý của người dùng đó trừ những trường hợp pháp luật có quy định khác.",
		REGULATION_V_6_CONTENT_1:
			" Người dùng có thể gửi khiếu nại trực tiếp hoặc gián tiếp đến thương nhân bằng hình thức gửi thông tin đến địa chỉ công ty hoặc qua email: binh.do@glowvietnam.com",
		REGULATION_V_6_CONTENT_2:
			" Bộ phận chăm sóc khách hàng của Glow sẽ hỗ trợ người dùng gửi thông tin khiếu nại có liên quan đến thương nhân bằng các phương thức nhanh nhất.",
		REGULATION_V_6_CONTENT_3:
			" Công ty có trách nhiệm thực hiện các biện pháp kỹ thuật, nghiệp vụ để xác minh các nội dung được phản ánh.",
		REGULATION_V_6_CONTENT_4: " Thời gian xứ lý phản ánh liên quan đến thông tin cá nhân là 7 ngày.",
		REGULATION_VI: " VI. Bảo vệ quyền lợi của người dùng ",
		REGULATION_VI_CONTENT_1:
			" Ban quản lý Sàn yêu cầu các cá nhân khi đăng ký tài khoản, phải cung cấp đầy đủ thông tin cá nhân có liên quan như: Họ và tên, địa chỉ liên lạc, email, số điện thoại,vân vân,và chịu trách nhiệm về tính pháp lý của những thông tin trên. Ban quản lý Glow không chịu trách nhiệm cũng như không giải quyết mọi khiếu nại có liên quan đến quyền lợi của người dùng đó nếu xét thấy tất cả thông tin cá nhân của người dùng đó cung cấp khi đăng ký ban đầu là không chính xác.",
		REGULATION_VI_CONTENT_2:
			" Người dùng có quyền gửi khiếu nại trực tiếp và yêu cầu bồi thường đến Kỹ thuật viên có liên quan trong trường hợp dịch vụ do Kỹ thuật viên thực hiện cung cấp không đúng.",
		REGULATION_VI_CONTENT_3:
			" Sàn giao dịch TMĐT Glow luôn đảm bảo làm trọng tài yêu cầu bồi thường cho người dùng từ Kỹ thuật viên cung cấp dịch vụ nhằm để bảo quyền lợi hợp pháp cho người dùng trong các trường hợp liên quan mâu thuẫn giao dịch gây ảnh hưởng đến lợi ích người dùng.",
		REGULATION_VII: " VII. Quản lý thông tin xấu ",
		REGULATION_VII_1: " 1. Kiểm soát nội dung ",
		REGULATION_VII_1_CONTENT_1:
			" Nội dung trên Sàn Glow là thông tin của KTV để người lựa chọn KTV do đó thông tin của kỹ thuật viên phải chính xác, có thật.",
		REGULATION_VII_1_CONTENT_2: " Quy định cụ thể:",
		REGULATION_VII_1_CONTENT_3: "- Ngôn ngữ: bài đăng sử dụng ngôn ngữ tiếng việt ",
		REGULATION_VII_1_CONTENT_4:
			"- Hình ảnh: Hình ảnh chụp thật, Glow khuyến khích các file ảnh có kích thước tối thiểu 640x480 pixels. Ảnh đăng lên phải đảm bảo không bị nhòe hoặc vỡ ảnh",
		REGULATION_VII_1_CONTENT_5: "- Giá: bắt buộc để giá, đơn vị tính VNĐ",
		REGULATION_VII_1_CONTENT_6: " Hành vi bị cấm:",
		REGULATION_VII_1_CONTENT_7: " - Không đăng bài đăng có các từ ngữ trái với thuần phong mỹ tục, đạo đức xã hội",
		REGULATION_VII_1_CONTENT_8:
			" - Đăng bài không liên quan dịch vụ Spa, masage mà Sàn cung cấp với tính chất quảng cáo",
		REGULATION_VII_1_CONTENT_9: " • Quảng cáo:",
		REGULATION_VII_1_CONTENT_10:
			" - Quảng cáo thiếu thẩm mỹ, trái với truyền thống lịch sử, văn hóa, đạo đức, thuần phong mỹ tục Việt Nam.",
		REGULATION_VII_1_CONTENT_11: " - Quảng cáo xúc phạm uy tín, danh dự, nhân phẩm của tổ chức, cá nhân;",
		REGULATION_VII_1_CONTENT_12:
			" - Quảng cáo có nội dung cạnh tranh không lành mạnh theo quy định của pháp luật về cạnh tranh.",
		REGULATION_VII_1_CONTENT_13: " - Quảng cáo vi phạm pháp luật về sở hữu trí tuệ.",
		REGULATION_VII_2: " 2. Kiểm soát nhà cung cấp, Kỹ thuật viên: ",
		REGULATION_VII_2_CONTENT_1: "a. Quy trình để trở thành Kỹ thuật viên/người cung cấp dịch vụ (đã mô tả ở trên)",
		REGULATION_VII_2_CONTENT_2: " Bước 1: Đồng ý điều khoản và chính sách của Glow",
		REGULATION_VII_2_CONTENT_3: " Bước 2: Tạo tài khoản",
		REGULATION_VII_2_CONTENT_4: " Bước 3: Ban quản trị cung cấp tài khoản cho Kỹ thuật viên",
		REGULATION_VII_2_CONTENT_5: "b. Quy định đối với nhà cung cấp/Kỹ thuật viên",
		REGULATION_VII_2_CONTENT_6:
			" Kỹ thuật viên phải cung cấp đầy đủ thông tin: Tên, địa chỉ, SĐT, mail, thông tin liên hệ trên sàn Glow.",
		REGULATION_VII_3:
			" 3. Quy trình phối hợp với các chủ thể quyền sở hữu trí tuệ rà soát và gỡ bỏ các thông tin phẩm xâm phạm quyền sở hữu trí tuệ trên sàn ",
		REGULATION_VII_3_CONTENT_1: " Bước 1: Tiếp nhận thông tin về xâm phạm quyền Sở hữu trí tuệ trên Sàn",
		REGULATION_VII_3_CONTENT_2: " Bước 2: Kiểm tra, Rà soát thông tin",
		REGULATION_VII_3_CONTENT_3:
			" Bước 3: Xác nhận lại thông tin có hay không về việc xâm phạm quyền Sở hữu trí tuệ trên Sàn",
		REGULATION_VII_3_CONTENT_4: " Bươc 4: Đưa phương án giải quyết, xử lý gỡ bỏ nếu có",
		REGULATION_VII_3_CONTENT_5:
			" Ngoài ra, yêu cầu bên chủ thể có tài liệu chứng minh về quyền sở hữu trí tuệ (văn bản, xác nhận của cơ quan có thẩm quyền Cục Sở hữu trí tuệ)",
		REGULATION_VII_4: " 4. Chế tài xử lý vi phạm đối với Khách hàng và Kỹ thuật viên:",
		REGULATION_VII_4_CONTENT_1:
			" Người dùng: nhắc nhở lần 1 đối với hành vi vi phạm của người dùng (cung cấp địa chỉ ảo, bom hàng, hủy đơn hàng nhiều lần ban quản lý Sàn sẽ giới hạn tài khoản của người dùng trong các giao dịch khác, và các chế tài khác do ban Quản lý sàn quy định",
		REGULATION_VII_4_CONTENT_2:
			" Kỹ thuật viên: Đăng thông tin dịch vụ vi phạm quy định của Sàn (như trên) : Nhắc nhở lần 1. Lần 2 Hạn chế cung cấp dịch vụ. Kỹ thuật viên có hành vi vi phạm nhiều lần sẽ bị khóa tài khoản Vĩnh viễn, và tước quyền Đối tác, quyền dành cho Kỹ thuật viên.",
		REGULATION_VII_4_CONTENT_3:
			" Giải quyết tranh chấp và các biện pháp xử lý với các hành vi xâm phạm quyền lợi người dùng (khách hàng sử dụng dịch vụ)",
		REGULATION_VII_4_CONTENT_4:
			" - Bước 1: Khách hàng khiếu nại về dịch vụ của Kỹ thuật viên qua email: binh.do@glowvietnam.com. Khách hàng có thể phản ánh trực tiếp đến ban quản trị CÔNG TY CỔ PHẦN CÔNG NGHỆ BK VIỆT NAM",
		REGULATION_VII_4_CONTENT_5:
			"- Bước 2: Bộ phận Chăm Sóc Khách Hàng của Glow sẽ tiếp nhận các khiếu nại của khách hàng (người dùng), tùy theo tính chất và mức độ của khiếu nại thì bên Glow, sẽ có những biện pháp cụ thể hỗ trợ khách hàng (người dùng) để giải quyết tranh chấp đó.",
		REGULATION_VII_4_CONTENT_6:
			" - Bước 3: Trong trường nằm ngoài khả năng và thẩm quyền của Glow thì Ban quản trị sẽ yêu cầu khách hàng (người dùng) đưa vụ việc này ra cơ quan nhà nước có thẩm quyền giải quyết theo pháp luật .",
		REGULATION_VII_4_CONTENT_7: " Khách hàng gửi khiếu nại tại địa chỉ :",
		REGULATION_VII_4_CONTENT_8: " CÔNG TY CỔ PHẦN CÔNG NGHỆ BK VIỆT NAM",
		REGULATION_VII_4_CONTENT_9:
			" Địa chỉ: Tầng 14, số 169 Nguyễn Ngọc Vũ, Phường Trung Hoà, Quận Cầu Giấy, Thành phố Hà Nội, Việt Nam",
		REGULATION_VII_4_CONTENT_10: " Tel: 0888129100",
		REGULATION_VII_4_CONTENT_11: " Email: binh.do@glowvietnam.com",
		REGULATION_VII_4_CONTENT_12: " Quy định khiếu nại, cảnh báo, tranh chấp",
		REGULATION_VII_4_CONTENT_13: " - Tất cả các bài đăng phải đủ các điều kiện dưới đây nếu không sẽ bị khóa:",
		REGULATION_VII_4_CONTENT_14: " + Đối tượng bị phản ánh là người dùng Glow;",
		REGULATION_VII_4_CONTENT_15: " + Sự việc phải liên quan đến bài viết của người dùng đó trên Glow;",
		REGULATION_VII_4_CONTENT_16: " + Phải có bằng chứng cụ thể;",
		REGULATION_VII_4_CONTENT_17: " + Không có ngôn từ xúc phạm, chửi tục, hăm dọa; ",
		REGULATION_VII_4_CONTENT_18: " - Khi khiếu nại phải đưa ra bằng chứng cụ thể, rõ ràng, đồng thời phải có : ",
		REGULATION_VII_4_CONTENT_19: " + Tài khoản của người khiếu nại.",
		REGULATION_VII_4_CONTENT_20: " + Địa chỉ liên kết dẫn chứng liên quan",
		REGULATION_VII_4_CONTENT_21:
			" Glow tôn trọng và nghiêm túc thực hiện các quy định của pháp luật về bảo vệ quyền lợi của khách hàng (người dùng). Vì vậy, để nghị người dùng đăng tin dịch vụ trên sàn cung cấp đầy đủ, chính xác, trung thực và chi tiết các thông tin liên quan đến dịch vụ. Mọi hành vi lừa đảo, gian lận trong kinh doanh đều bị lên án và phải chịu hoàn toàn trách nhiệm trước pháp luật.",
		REGULATION_VII_4_CONTENT_22:
			" Các Kỹ thuật viên, khách hàng sẽ phải có vai trò trách nhiệm trong việc tích cực giải quyết vấn đề. Đối với Kỹ thuật viên hàng cần có trách nhiệm cung cấp văn bản giấy tờ chứng thực thông tin liên quan đến sự việc đang gây mâu thuẫn cho khách hàng. Đối với Glow sẽ có trách nhiệm cung cấp những thông tin liên quan đến khách hàng và Kỹ thuật viên nếu được khách hàng hoặc người liên quan đến tranh chấp đó yêu cầu.",
		REGULATION_VII_4_CONTENT_23:
			" Sau khi Kỹ thuật viên, khách hàng đã giải quyết xong tranh chấp phải có trách nhiệm bảo lại cho ban quản trị Glow. Trong trường hợp giao dịch phát sinh mâu thuẫn mà lỗi thuộc về Kỹ thuật viên, Glow sẽ có biện pháp cảnh cáo, khóa tài khoản hoặc chuyển cho cơ quan pháp luật có thẩm quyền tùy theo mức độ của sai phạm Glow sẽ chấm dứt và gỡ bỏ toàn bộ dịch vụ của Kỹ thuật viên đó trên Glow đồng thời yêu cầu Kỹ thuật viên bồi hoàn cho khách hàng thỏa đáng trên cơ sở thỏa thuận với khách hàng.",
		REGULATION_VII_4_CONTENT_24:
			" Nếu thông qua hình thức thỏa thuận mà vẫn không thể giải quyết được mâu thuẫn phát sinh tử giao dịch giữa hai bên Người dùng, Kỹ thuật viên, thì một trong hai bên Người dùng và Kỹ thuật viên sẽ có quyền nhờ đến cơ quan pháp luật có thẩm quyền can thiệp nhằm đảm bảo lợi ích hợp pháp của các bên nhất là cho người dùng.",
		REGULATION_VIII: " VIII. Trách nhiệm trong trường hợp phát sinh lỗi kỹ thuật ",
		REGULATION_VIII_CONTENT_1:
			" Sàn giao dịch TMĐT Glow cam kết nỗ lực đảm bảo sự an toàn và ổn định của toàn bộ hệ thống kỹ thuật. Tuy nhiên, trong trường hợp xảy ra sự cố do lỗi của Glow, Glow sẽ ngay lập tức áp dụng các biện pháp để đảm bảo quyền lợi cho người dùng.",
		REGULATION_VIII_CONTENT_2:
			" Khi thực hiện các giao dịch trên Sàn, bắt buộc các người dùng phải thực hiện đúng theo các quy trình hướng dẫn.",
		REGULATION_VIII_CONTENT_3:
			" Ban quản lý Sàn giao dịch Glow cam kết cung cấp chất lượng dịch vụ tốt nhất cho các người dùng tham gia giao dịch. Trong trường hợp phát sinh lỗi kỹ thuật, lỗi phần mềm hoặc các lỗi khách quan khác dẫn đến người dùng không thể tham gia giao dịch được thì các người dùng thông báo cho Ban quản lý Sàn giao dịch TMĐT qua địa chỉ email chúng tôi sẽ khắc phục lỗi trong thời gian sớm nhất, tạo điều kiện cho các người dùng tham gia Sàn giao dịch TMĐT Glow.",
		REGULATION_VIII_CONTENT_4:
			" Tuy nhiên, Ban quản lý Sàn giao dịch TMĐT Glow sẽ không chịu trách nhiệm giải quyết trong trường hợp thông báo của người dùng không đến được Ban quản lý, phát sinh từ lỗi kỹ thuật, lỗi đường truyền, phần mềm hoặc các loại khác không do Ban quản lý gây ra.",
		REGULATION_IX: " IX. Quyền và nghĩa vụ của Ban quản lý sàn TMĐT Glow",
		REGULATION_IX_1: " 1. Quyền của Ban quản lý Sàn giao dịch TMĐT Glow ",
		REGULATION_IX_1_CONTENT_1:
			" - Sàn giao dịch TMĐT Glow sẽ tiến hành cung cấp các dịch vụ cho người dùng tham gia sau khi đã hoàn thành các thủ tục và các điều kiện bắt buộc mà Sàn giao dịch TMĐT Glow nêu ra.",
		REGULATION_IX_1_CONTENT_2:
			" - Trong trường hợp có cơ sở để chứng minh người dùng cung cấp thông tin cho Sàn giao dịch TMĐT Glow không chính xác, sai lệch, không đầy đủ hoặc vi phạm pháp luật hay thuần phong mỹ tục Việt Nam thì Sàn giao dịch TMĐT Glow có quyền từ chối, tạm ngừng hoặc chấm dứt quyền sử dụng dịch vụ của người dùng.",
		REGULATION_IX_1_CONTENT_3:
			" - Sàn giao dịch TMĐT Glow có thể chấm dứt quyền người dùng và quyền sử dụng một hoặc tất cả các dịch vụ của người dùng và sẽ thông báo cho người dùng trong thời hạn ít nhất là một (01) tháng trong trường hợp người dùng vi phạm các Quy chế của Sàn giao dịch TMĐT Glow hoặc có những hành vi ảnh hưởng đến hoạt động kinh doanh trên Sàn giao dịch TMĐT Glow .",
		REGULATION_IX_1_CONTENT_4:
			" - Sàn giao dịch TMĐT Glow sẽ xem xét việc chấm dứt quyền sử dụng dịch vụ và quyền người dùng của người dùng nếu người dùng không tham gia hoạt động giao dịch và trao đổi thông tin trên Sàn giao dịch TMĐT Glow liên tục trong ba (03) tháng. Nếu muốn tiếp tục trở thành người dùng và được cấp lại quyền sử dụng dịch vụ thì phải đăng ký lại từ đầu theo mẫu và thủ tục của Sàn giao dịch TMĐT Glow .",
		REGULATION_IX_1_CONTENT_5:
			" - Sàn giao dịch TMĐT Glow có thể chấm dứt ngay quyền sử dụng dịch vụ và quyền người dùng của người dùng nếu Sàn giao dịch TMĐT Glow phát hiện người dùng đã phá sản, bị kết án hoặc đang trong thời gian thụ án, trong trường hợp người dùng tiếp tục hoạt động có thể gây cho Sàn giao dịch TMĐT Glow trách nhiệm pháp lý, có những hoạt động lừa đảo, giả mạo, gây rối loạn thị trường, gây mất đoàn kết đối với các người dùng khác của Sàn giao dịch TMĐT Glow, hoạt động vi phạm pháp luật hiện hành của Việt Nam. Trong trường hợp chấm dứt quyền người dùng và quyền sử dụng dịch vụ thì tất cả các chứng nhận, các quyền của người dùng được cấp sẽ mặc nhiên hết giá trị và bị chấm dứt.",
		REGULATION_IX_1_CONTENT_6:
			" - Sàn giao dịch TMĐT Glow giữ bản quyền sử dụng dịch vụ và các nội dung trên Sàn giao dịch TMĐT Glow theo các quy định pháp luật về bảo hộ sở hữu trí tuệ tại Việt Nam. Tất cả các biểu tượng, nội dung theo các ngôn ngữ khác nhau đều thuộc quyền sở hữu của Sàn giao dịch TMĐT Glow. Nghiêm cấm mọi hành vi sao chép, sử dụng và phổ biến bất hợp pháp các quyền sở hữu trên.",
		REGULATION_IX_1_CONTENT_7:
			" - Sàn giao dịch TMĐT Glow giữ quyền được thay đổi bảng, biểu giá dịch vụ và phương thức thanh toán trong thời gian cung cấp dịch vụ cho người dùng theo nhu cầu và điều kiện khả năng của Sàn giao dịch TMĐT Glow và sẽ báo trước cho người dùng thời hạn là một (01) tháng.",
		REGULATION_IX_2: " 2. Nghĩa vụ và trách nhiệm của Ban quản lý Sàn giao dịch TMĐT Glow ",
		REGULATION_IX_2_CONTENT_1:
			" - Sàn giao dịch TMĐT Glow có trách nhiệm xây dựng, thực hiện “cơ chế kiểm tra, giám sát để đảm bảo việc cung cấp thông tin của Kỹ thuật viên trên sàn giao dịch thương mại điện tử được thực hiện chính xác đầy đủ” theo quy định tại Khoản 4 Điều 36 Nghị định 52/2013/NĐ-CP.",
		REGULATION_IX_2_CONTENT_2:
			" - Sàn giao dịch TMĐT Glow có trách nhiệm có biện pháp xử lý kịp thời khi phát hiện hoặc nhận được phản ánh về hành vi kinh doanh vi phạm pháp luật trên sàn giao dịch thương mại điện tử.",
		REGULATION_IX_2_CONTENT_3:
			" - Sàn giao dịch TMĐT Glow có trách nhiệm hỗ trợ cơ quan quản lý nhà nước điều tra các hành vi kinh doanh vi phạm pháp luật, cung cấp thông tin đăng ký, lịch sử giao dịch và các tài liệu khác về đối tượng có hành vi vi phạm pháp luật trên sàn giao dịch thương mại điện tử.",
		REGULATION_IX_2_CONTENT_4:
			" - Sàn giao dịch TMĐT Glow có trách nhiệm công bố công khai cơ chế giải quyết các tranh chấp phát sinh trong quá trình giao dịch trên sàn giao dịch thương mại điện tử. Khi khách hàng trên sàn giao dịch thương mại điện tử phát sinh mâu thuẫn với Kỹ thuật viên hoặc bị tổn hại lợi ích hợp pháp, phải cung cấp cho khách hàng thông tin về Kỹ thuật viên, tích cực hỗ trợ khách hàng bảo vệ quyền và lợi ích hợp pháp của mình.",
		REGULATION_IX_2_CONTENT_5:
			" - Ban quản lý Sàn sẽ nỗ lực tối đa và nghiêm túc loại bỏ những thông tin không trung thực.",
		REGULATION_IX_2_CONTENT_6:
			" - Ban quản lý có nghĩa vụ tiếp nhận những phản ánh từ phía người dùng, khách hàng mua, khách hàng bán.",
		REGULATION_IX_2_CONTENT_7:
			" - Sàn giao dịch TMĐT Glow chịu trách nhiệm xây dựng Sàn giao dịch bao gồm một số công việc chính như: nghiên cứu, thiết kế, mua sắm các thiết bị phần cứng và phần mềm, kết nối Internet, xây dựng chính sách phục vụ cho hoạt động Sàn giao dịch TMĐT Glow trong điều kiện và phạm vi cho phép. Sàn giao dịch TMĐT Glow sẽ tiến hành triển khai và hợp tác với các đối tác trong việc xây dựng hệ thống các dịch vụ, các công cụ tiện ích phục vụ cho việc giao dịch của các người dùng tham gia và người sử dụng trên Sàn giao dịch TMĐT Glow .",
		REGULATION_IX_2_CONTENT_8:
			" - Sàn giao dịch TMĐT Glow có trách nhiệm đứng ra làm trung gian trong việc hòa giải nếu xảy ra tranh chấp giữa khách hàng và Kỹ thuật viên. Sàn sẽ tiếp nhận thông tin phản ánh, khiếu nại từ khách hàng và kiểm tra nội dung phản ánh, khiếu nại đó. Nếu xét thấy những phản ánh đó là đúng, Sàn sẽ yêu cầu Kỹ thuật viên phải giải trình về những thông tin đó. Tùy theo mức độ sai phạm Sàn giao dịch TMĐT Glow sẽ có phướng án giải quyết yêu cầu Kỹ thuật viên đền bù cho khách hàng, sẽ khóa tài khoản của Kỹ thuật viên trên ứng dụng Glow.",
		REGULATION_IX_2_CONTENT_9:
			" - Sàn giao dịch TMĐT Glow hịu trách nhiệm xây dựng, bổ sung hệ thống các kiến thức, thông tin về: nghiệp vụ ngoại thương, thương mại điện tử, hệ thống văn bản pháp luật thương mại trong nước và quốc tế, thị trường nước ngoài, cũng như các tin tức có liên quan đến hoạt động của Sàn giao dịch TMĐT Glow .",
		REGULATION_IX_2_CONTENT_10:
			" - Sàn giao dịch TMĐT Glow sẽ tiến hành các hoạt động xúc tiến, quảng bá Sàn giao dịch TMĐT Glow ra thị trường nước ngoài trong phạm vi và điều kiện cho phép, góp phần mở rộng, kết nối đáp ứng các nhu cầu tìm kiếm bạn hàng và phát triển thị trường nước ngoài của các người dùng tham gia Sàn giao dịch TMĐT Glow ",
		REGULATION_IX_2_CONTENT_11:
			" - Sàn giao dịch TMĐT Glow sẽ cố gắng đến mức cao nhất trong phạm vi và điều kiện có thể để duy trì hoạt động bình thường của Sàn giao dịch TMĐT Glow và khắc phục các sự cố như: sự cố kỹ thuật về máy móc, lỗi phần mềm, hệ thống đường truyền internet, nhân sự, các biến động xã hội, thiên tai, mất điện, các quyết định của cơ quan nhà nước hay một tổ chức liên quan thứ ba. Tuy nhiên nếu những sự cố trên xảy ra nằm ngoài khả năng kiểm soát, là những trường hợp bất khả kháng mà gây thiệt hại cho người dùng thì Sàn giao dịch TMĐT Glow không phải chịu trách nhiệm liên đới.",
		REGULATION_X: " X. Quyền và trách nhiệm của các bên tham gia Sàn giao dịch TMĐT Glow ",
		REGULATION_X_1: " 1.1. Quyền và trách nhiệm của đối tác (Kỹ thuật viên, nhà cung cấp) ứng dụng Glow",
		REGULATION_X_1_CONTENT_1: " a. Quyền của Kỹ thuật viên trên Sàn giao dịch TMĐT Glow",
		REGULATION_X_1_CONTENT_0:
			"- Kỹ thuật viên sẽ được cấp một tên đăng nhập và mật khẩu riêng để được vào sử dụng trong việc quản lý những giao dịch tại Glow",
		REGULATION_X_1_CONTENT_2:
			" - Kỹ thuật viên sẽ được nhân viên của Sàn giao dịch TMĐT Glow hướng dẫn sử dụng được các công cụ, các tính năng phục vụ cho việc mua hàng hoặc đăng tin rao vặt và sử dụng các dịch vụ tiện ích trên Sàn giao dịch TMĐT Glow .",
		REGULATION_X_1_CONTENT_3:
			" - Kỹ thuật viên có quyền đóng góp ý kiến cho Sàn giao dịch TMĐT Glow trong quá trình hoạt động. Các kiến nghị được gửi trực tiếp bằng thư hoặc email đến cho Sàn giao dịch TMĐT Glow .",
		REGULATION_X_1_CONTENT_4: " - Kỹ thuật viên được quyền bình luận đúng sự thật về dịch vụ của Kỹ thuật viên.",
		REGULATION_X_1_CONTENT_5: " b. Nghĩa vụ và trách nhiệm của Kỹ thuật viên trên Sàn giao dịch TMĐT Glow",
		REGULATION_X_1_CONTENT_6:
			" - Kỹ thuật viên sẽ tự chịu trách nhiệm về bảo mật và lưu giữ mọi hoạt động sử dụng dịch vụ dưới tên đăng ký, đăng nhập, mật khẩu và hộp thư điện tử của mình.",
		REGULATION_X_1_CONTENT_7:
			" - Kỹ thuật viên có trách nhiệm thông báo kịp thời cho Sàn giao dịch TMĐT Glow về những hành vi sử dụng trái phép, lạm dụng, phạm bảo mật, lưu giữ đăng ký và mật khẩu của mình để hai bên cùng hợp tác xử lý.",
		REGULATION_X_1_CONTENT_8:
			" - Kỹ thuật viên cam kết những thông tin cung cấp cho Sàn giao dịch TMĐT Glow và những thông tin đăng tải lên Sàn giao dịch TMĐT Glow là chính xác.",
		REGULATION_X_1_CONTENT_9:
			" - Kỹ thuật viên tự chịu trách nhiệm về nội dung, hình ảnh của thông tin Cá nhân và các thông tin khác cũng như toàn bộ quá trình giao dịch với đối tác trên Sàn giao dịch TMĐT Glow .",
		REGULATION_X_1_CONTENT_10:
			" - Kỹ thuật viên có trách nhiệm cung cấp thông tin về giao dịch hỗ trợ Sàn giao dịch TMĐT Glow trong việc giải quyết tranh chấp phát sinh giữa khách hàng và bán diễn ra qua Sàn.",
		REGULATION_X_1_CONTENT_11:
			" - Kỹ thuật viên có trách nhiệm bồi thường thiệt hại cho khách hàng chứng minh được lỗi đó thuộc về Kỹ thuật viên.",
		REGULATION_X_1_CONTENT_12:
			" - Kỹ thuật viên cam kết, đồng ý không sử dụng dịch vụ của Sàn giao dịch TMĐT Glow vào những mục đích bất hợp pháp, lừa đảo, đe doạ, thăm dò thông tin bất hợp pháp, phá hoại, tạo ra và phát tán virus gây hư hại tới hệ thống, cấu hình, truyền tải thông tin của Sàn giao dịch TMĐT Glow hay sử dụng dịch vụ của mình vào mục đích đầu cơ, lũng đoạn thị trường tạo những đơn đặt hàng, chào hàng giả, kể cả phục vụ cho việc phán đoán nhu cầu thị trường. Trong trường hợp vi phạm thì người dùng phải chịu trách nhiệm hành vi của mình trước pháp luật.",
		REGULATION_X_1_CONTENT_13:
			" - Kỹ thuật viên cam kết không được thay đổi, chỉnh sửa, sao chép, truyền bá, phân phối, cung cấp và tạo những công cụ tương tự của dịch vụ do Sàn giao dịch TMĐT Glow cung cấp cho một bên thứ ba nếu không được sự đồng ý của Sàn giao dịch TMĐT Glow trong Quy định này.",
		REGULATION_X_1_CONTENT_14:
			" - Kỹ thuật viên không được hành động gây mất uy tín của Sàn giao dịch TMĐT Glow dưới mọi hình thức như gây mất đoàn kết giữa các người dùng bằng cách sử dưới mọi hình thức như gây mất đoàn kết giữa các người bằng cách sử dụng tên đăng ký thứ hai, thông qua một bên dụng tên đăng ký thứ ba hoặc tuyên truyền, phổ biến những thông tin không có lợi cho uy tín của Sàn giao dịch TMĐT Glow.",
		REGULATION_X_1_CONTENT_14_1:
			"-	Kỹ thuật viên cam kết (i) cung cấp dịch vụ phù hợp với ngành nghề kinh doanh đã được Cơ quan có thẩm quyền cấp phép và (ii) có đầy đủ các Giấy phép liên quan đến ngành nghề hoạt động theo quy định của pháp luật hiện hành.",
		REGULATION_X_1_CONTENT_14_2:
			"-	Kỹ thuật viên tự chịu trách nhiệm về nhân sự của mình. Kỹ thuật viên phải bảo đảm nhân sự của mình cung cấp dịch vụ chuyên nghiệp, luôn có hồ sơ lý lịch rõ ràng, có nghiệp vụ phù hợp và được Kỹ thuật viên giám sát trong suốt quá trình làm việc. ",
		REGULATION_X_1_CONTENT_14_3:
			"-	Kỹ thuật viên chịu toàn bộ trách nhiệm và bồi thường đối với bất cứ tổn thất / thiệt hại nào của Glow và thành viên của Glow cho bất cứ sai sót / vi phạm nào của Kỹ thuật viên trong quá trình cung cấp dịch vụ.",

		REGULATION_X_1_CONTENT_15:
			" - Kỹ thuật viên có nghĩa vụ cung cấp thông tin về tình hình kinh doanh của mình khi có yêu cầu của cơ quan nhà nước có thẩm quyền để phục vụ hoạt động thống kê thương mại điện tử; tuân thủ quy định của pháp luật về thanh toán, quảng cáo, khuyến mại, bảo vệ quyền sở hữu trí tuệ, bảo vệ quyền lợi người tiêu dùng và các quy định của pháp luật có liên quan khác khi cung ứng dịch vụ trên sàn giao dịch thương mại điện tử.",
		REGULATION_X_1_CONTENT_16:
			" - Kỹ thuật viên và Khách hàng phải chịu trách nghiệm theo quy định của pháp luật Việt Nam khi có những hành vi nhạy cảm, quá khích và hành vi vi phạm luật pháp. Sàn TMĐT Glow miễn nhiễm trách nhiệm với những hành vi của Khách hàng với Kỹ thuật viên; Kỹ thuật viên với khách hàng. Trong trường hợp xảy ra kiện tụng, tranh chấp, khách hàng và đối tác sẽ làm việc trực tiếp với nhau, Sàn TMĐT Glow sẽ cung cấp các thông tin cần thiết khi được yêu cầu từ cơ quan có thẩm quyền.",
		REGULATION_X_2: " 1.2. Quyền và trách nhiệm của người dùng (người , người sử dụng dịch vụ…) trên Glow ",
		REGULATION_X_2_CONTENT_0: " a. Quyền của khách hàng tham gia Sàn giao dịch TMĐT Glow ",
		REGULATION_X_2_CONTENT_1:
			" - Khi đăng ký trở thành Người dùng, khách hàng sẽ được khởi tạo tài khoản để tham gia tận hưởng các ưu đãi nằm trong hệ thống của Glow. ",
		REGULATION_X_2_CONTENT_2:
			" - Khách hàng sẽ được cấp một tên đăng ký và mật khẩu riêng để được vào sử dụng các dịch vụ, quản lý tài khoản và các thông tin lịch sử sử dụng ưu đãi của mình trong hệ thống Glow. ",
		REGULATION_X_2_CONTENT_3:
			" - Khách hàng sẽ có thể được hưởng các chính sách ưu đãi do TMĐT Glow hay các đối tác thứ ba cung cấp trên TMĐT Glow. Các chính sách ưu đãi này sẽ được Ứng dụng TMĐT Glow giải quyết (nếu có) và sẽ được đăng tải trực tiếp trên Ứng dụng TMĐT Glow hoặc được gửi trực tiếp đến Khách hàng.  ",
		REGULATION_X_2_CONTENT_4:
			" - Khách hàng có quyền đóng góp ý kiến cho TMĐT Glow trong quá trình hoạt động. Các kiến nghị được gửi trực tiếp bằng thư hoặc email đến cho Ứng dụng Glow.",
		REGULATION_X_2_CONTENT_5:
			" - Khách hàng có quyền gửi khiếu nại trực tiếp và yêu cầu bồi thường đến Glow trong trường hợp dịch vụ của Kỹ thuật viên thực hiện cung cấp không đảm bảo chất lượng như các thông tin đã công bố.",
		REGULATION_X_2_CONTENT_6: " b.Trách nhiệm của khách hàng tham gia Sàn giao dịch TMĐT Glow",
		REGULATION_X_2_CONTENT_7:
			" - Khách hàng sẽ tự chịu trách nhiệm về bảo mật, lưu giữ và mọi hoạt động sử dụng dịch vụ dưới tên đăng ký, mật khẩu và hộp thư điện tử của mình.",
		REGULATION_X_2_CONTENT_8:
			"-	Khách hàng và Kỹ thuật viên phải chịu trách nhiệm theo quy định của pháp luật Việt Nam khi có những hành vi nhạy cảm, quá khích và hành vi vi phạm luật pháp luật. Sàn TMĐT Glow miễn nhiễm trách nhiệm với những hành vi của Khách hàng với Kỹ thuật viên; Kỹ thuật viên với khách hàng. Trong trường hợp xảy ra kiện tụng, tranh chấp, khách hàng và Kỹ thuật viên sẽ làm việc trực tiếp với nhau, Sàn TMĐT Glow sẽ cung cấp các thông tin cần thiết khi được yêu cầu từ cơ quan có thẩm quyền.",
		REGULATION_X_2_CONTENT_9:
			" - Khách hàng có trách nhiệm thông báo kịp thời cho Ứng dụng TMĐT Glow về những hành vi sử dụng trái phép, lạm dụng, vi phạm bảo mật, lưu giữ tên đăng ký và mật khẩu của mình để hai bên cùng hợp tác xử lý.",
		REGULATION_X_2_CONTENT_10:
			" - Khách hàng cam kết những thông tin cung cấp cho Sàn giao dịch TMĐT Glow và những thông tin đang tải lên Sàn giao dịch TMĐT Glow là chính xác.",
		REGULATION_X_2_CONTENT_11:
			" - Khách hàng có trách nhiệm cung cấp thông tin về giao dịch hỗ trợ Sàn giao dịch TMĐT Glow trong việc giải quyết tranh chấp phát sinh giữa Khách hàng và Kỹ thuật viên diễn ra qua Sàn.",
		REGULATION_X_2_CONTENT_12:
			" - Khách hàng cam kết, đồng ý không sử dụng dịch vụ của Sàn giao dịch TMĐT Glow vào những mục đích bất hợp pháp, không hợp lý, lừa đảo, đe doạ, thăm dò thông tin bất hợp pháp, phá hoại, tạo ra và phát tán virus gây hư hại tới hệ thống, cấu hình, truyền tải thông tin của Sàn giao dịch TMĐT Glow hay sử dụng dịch vụ của mình vào mục đích đầu cơ, lũng đoạn thị trường tạo những đơn đặt hàng, chào hàng giả, kể cả phục vụ cho việc phán đoán nhu cầu thị trường. Trong trường hợp vi phạm thì người dùng phải chịu trách nhiệm về các hành vi của mình trước pháp luật.",
		REGULATION_X_2_CONTENT_13:
			" - Khách hàng cam kết không được thay đổi, chỉnh sửa, sao chép, truyền bá, phân phối, cung cấp và tạo những công cụ tương tự của dịch vụ do Sàn giao dịch TMĐT Glow cung cấp cho một bên thứ ba nếu không được sự đồng ý của Sàn giao dịch TMĐT Glow trong Quy định này.",
		REGULATION_X_2_CONTENT_14:
			" - Khách hàng không được hành động gây mất uy tín của Sàn giao dịch TMĐT Glow dưới mọi hình thức như gây mất đoàn kết giữa các người dùng bằng cách sử dụng tên đăng ký thứ hai, thông qua một bên thứ ba hoặc tuyên truyền, phổ biến những thông tin không có lợi cho uy tín của Sàn giao dịch TMĐT Glow.",
		REGULATION_XI: " XI. Điều khoản áp dụng ",
		REGULATION_XI_CONTENT_1:
			" Quy chế của Sàn giao dịch TMĐT Glow chính thức có hiệu lực thi hành kể từ ngày ký Quyết định ban hành kèm theo Quy chế này. Sàn giao dịch TMĐT Glow có quyền và có thể thay đổi Quy chế này bằng cách thông báo lên Sàn giao dịch TMĐT Glow cho người dùng biết. Việc người dùng tiếp tục sử dụng dịch vụ sau khi Quy chế sửa đổi được công bố và thực thi thì đồng nghĩa với việc người dùng đã chấp nhận Quy chế sửa đổi này.",
		REGULATION_XI_CONTENT_2:
			" Quy chế hoạt động sẽ được Glow cập nhật bổ sung liên tục và thông báo trước khi thực hiện. Quy chế có hiệu lực thi hành sau 5 ngày làm việc khi có thông báo thay đổi. Người dùng tham gia Glow có trách nhiệm tuân theo quy chế hiện hành khi giao dịch trên sàn TMĐT Glow.",
		REGULATION_XII: " XII. Điều khoản cam kết ",
		REGULATION_XII_CONTENT_1:
			" Mọi người dùng và đối tác/Kỹ thuật viên khi sử dụng Glow làm giao dịch mua bán trực tuyến thì đồng nghĩa việc các bên có liên quan đã chấp thuận tuân theo quy chế này. Mọi thắc mắc của khách hàng xin vui lòng liên hệ với Glow theo thông tin dưới đây để được giải đáp.",
		REGULATION_XII_CONTENT_2: " Hỗ trợ khách hàng",
		REGULATION_XII_CONTENT_3: " Sàn giao dịch TMĐT Glow",
		REGULATION_XII_CONTENT_4:
			" • Địa chỉ: Tầng 14, số 169 Nguyễn Ngọc Vũ, Phường Trung Hoà, Quận Cầu Giấy, Thành phố Hà Nội, Việt Nam",
		REGULATION_XII_CONTENT_5: " • Điện thoại: 0888129100",
		REGULATION_XII_CONTENT_6: " Email: binh.do@glowvietnam.com",
		REGULATION_XII_CONTENT_7: " ĐẠI DIỆN CÔNG TY (ký tên, đóng dấu)",

		HOME_PAGEV2_TITLE: "Glow - Nền tảng đa dịch vụ tận nơi",
		HOME_PAGEV2_TITLE_V2: "",
		HOME_PAGEV2_SERVICE: "Cách đặt lịch tại nhà:",
		HOME_PAGEV2_SERVICE_CONTEN_1: 'Bước 1: Chọn mục "Spa tại nhà"',
		HOME_PAGEV2_SERVICE_CONTEN_2: "Bước 2: Chọn Kỹ thuật viên",
		HOME_PAGEV2_SERVICE_CONTEN_3: "Bước 3: Kỹ thuật viên sẽ đến thao tác tại nhà bạn",
		HOME_PAGEV2_SERVICE_CONTEN_4: "",
		HOME_PAGEV2_SERVICE_CONTEN_5: "",
		HOME_PAGEV2_SERVICE_CONTEN_6: "",
		HOME_PAGEV2_SERVICE_CONTEN_7: "",
		HOME_PAGEV2__SPA_3STEP: "Cách đặt lịch Spa:",
		HOME_PAGEV2__SPA_3STEP_CONTENT_1: "Bước 1: Xem các Spa gần bạn đang giảm giá sâu",
		HOME_PAGEV2__SPA_3STEP_CONTENT_2: "Bước 2: Chọn Spa và dịch vụ phù hợp ",
		HOME_PAGEV2__SPA_3STEP_CONTENT_3: "Bước 3: Di chuyển đến Spa và tận hưởng dịch vụ",
		HOME_PAGEV2_TL: "Đặt dịch vụ tại nhà",
		HOME_PAGEV2_TL_CT: "Massage, makeup, nail, wax, tài xế, trợ lý, giúp việc",
		HOME_PAGEV2_GC: "Tìm kiếm địa điểm uy tín",
		HOME_PAGEV2_GC_CT: "Spa, thẩm mỹ viện, phòng khám",
		HOME_PAGEV2_CL: "An tâm chất lượng",
		HOME_PAGEV2_CL_CT: "Đánh giá minh bạch, chứng chỉ được thẩm định rõ ràng",
		HOME_PAGEV2_DOWNLOAD: "Tải ứng dụng",
		HOME_PAGEV2_FOOTER: "Glow - Nền tảng đa dịch vụ tận nơi",

		HOME_PAGE_IMAGE_PHONE: "./static/img/Trangchuwebsite.jpg",

		ALT_MENU_LOGO: "Glow logo",
		ALT_MENU_LOGO_RES: "Lựa chọn ngôn ngữ tiếng Việt trên Glow",
		ALT_IMG_BCT: "Glow đã đăng ký bộ công thương",
		ALT_GLOW_FAGE_FACE: "Glow facebook fanpage",
		ALT_GLOW_FAGE_INSTA: "Glow instagram fanpage",
		ALT_GLOW_FAGE_TIKTOK: "Kênh tiktok của Glow",
		ALT_GLOW_FAGE_LINK: "Kênh linkedin của Glow",
		ALT_GLOW_FAGE_YOUTUBE: "Kênh youtube của Glow",
		ALT_GLOW_FAGE_TWITTER: "Kênh twitter của Glow",
		ALT_GLOW_FAGE_ZALO: "Kênh zalo của Glow",
		ALT_GLOW_FAGE_KKT: "Kênh kakaotask của Glow",
		ALT_GLOW_FAGE_LINE: "Kênh line của Glow",
		ALT_GLOW_HOME_PAGE: "Trang chủ ứng dụng Glow massage tại nhà",
		ALT_GLOW_BOOK_HOME: "Các bước để đặt massage tại nhà trên ứng dụng Glow",
		ALT_GLOW_BOOK_APP: "Các bước đặt lịch Spa trên ứng dụng Glow ",
		ALT_GLOW_TL: "Glow đem lại sự tiện lợi cho khách hàng",
		ALT_GLOW_RR: "Giá cả rõ ràng trên ứng dụng Glow",
		ALT_GLOW_DG: "Chất lượng được đánh giá rõ ràng trên ứng dụng Glow",
		ALT_GLOW_DOWNLOAD_GLOW_STORE: "Liên kết để tải ứng dụng Glow trên App Store",
		ALT_GLOW_DOWNLOAD_GLOW_GG_PLAY: "Liên kết để tải ứng dụng Glow trên Google Play",
		ALT_GLOW_DOWNLOAD_GLOW_RES: "Liên kết để tải ứng dụng Glow trên Google Play và Apple Store",

		ALT_IMG_ABOUT_1: "Massage tại nhà trên ứng dụng Glow",
		ALT_IMG_ABOUT_2: "Trang điểm tại nhà trên ứng dụng Glow",
		ALT_IMG_ABOUT_3: "Làm nail tại nhà trên ứng dụng Glow",

		ALT_IMG_PARTNER_1: "Kỹ thuật viên massage tại nhà của Glow",
		ALT_IMG_PARTNER_2: "Nguyên vật liệu mà Glow khuyến khích đối tác, kỹ thuật viên sử dụng khi massage tại nhà",
		ALT_IMG_PARTNER_3:
			'Ảnh trang chủ của ứng dụng Glow, bao gồm nút "Trở thành đối tác" để hướng dẫn đăng ký thành đối tác Glow',

		ALT_IMG_PARTNER_DL_IOS_QR: "Mã QR code để tải ứng dụng Glow trên App Store",
		ALT_IMG_PARTNER_DL_ADR_QR: "Mã QR code để tải ứng dụng Glow trên Google Play",
		ALT_IMG_PARTNER_DL_IOS: "Liên kết để tải ứng dụng Glow trên App Store",
		ALT_IMG_PARTNER_DL_ADR: "Liên kết để tải ứng dụng Glow trên Google Play",

		ALT_IMG_BANNER_BLOG: "Blog của Glow dùng để chia sẻ kiến thức chăm sóc sức khoẻ và làm đẹp",

		MASSAGE_AT_HOME: "Massage tại nhà",
		MASSAGE_LOCATION: "Địa điểm massage",
		HEADER_SPA_AT_HOME: "Dịch vụ tại nhà",
		SEE_ALL: "Xem tất cả",
		FILTERS: "Bộ lọc",
		FILTERS_CITY: "Thành phố",
		FILTERS_GENDER: "Giới tính",
		FILTERS_PRICE: "Giá tiền",
		FILTERS_REVIEWS: "Đánh giá",

		DESCRIPTION: "Mô tả",
		DEAL_HOT: "⚡ Hot Deal",
		ALL: "Tất cả",
		BOOK_NOW: "Đặt ngay",
		DISTRICT: "Quận / Huyện",
		MALE: "Nam",
		FEMALE: "Nữ",
		UNDER300000: "Dưới 300.000đ",
		ABOVE1000000: "Trên 1.000.000đ",

		FILTERS_BY_CITY: "Lọc theo Thành phố",
		FILTERS_BY_GENDER: "Lọc theo Giới tính",
		FILTERS_BY_PRICE: "Lọc theo Giá tiền",
		FILTERS_BY_REVIEWS: "Lọc theo Đánh giá",
		FILTERS_BY_DISTRICT: "Lọc theo Quận / Huyện",

		NO_PARTNERS_AVAILABLE_YET: "Hiện chưa có Đối tác ",
		AT_HOME: "tại nhà",
		DEAL_HOT_V2: "Hot Deal",
		WARD: "Phường / Xã",

		NEW_PAGE_CASHBACK: "Hoàn tiền",
		NEW_PAGE_COLLECT_VOUCHER: "Nhận voucher",
		NEW_PAGE_TAP_TO_RATE: "Chạm để đánh giá",
		NEW_PAGE_NO_REVIEWS: "Chưa có đánh giá nào",
		NEW_PAGE_SERVICE_DESCRIPTION: "Mô tả dịch vụ",
		NEW_PAGE_PRESSING_COLLECT_VOUCHER: "Sau khi ấn “Nhận voucher”, bạn sẽ nhận được mã Voucher.",
		NEW_PAGE_EXPIRATION_DATE: "Hạn sử dụng",
		NEW_PAGE_REFUND_GLOW_BALANCE: "Sau sử dụng dịch vụ, bạn sẽ được Glow hoàn tiền vào số dư Glow.",
		NEW_PAGE_CUSTOMER_REVIEWS: "Đánh giá của khách hàng",
		FILTERS_BY_WARD: "Lọc theo Phường / Xã",
		NEW_PAGE_SEE_MORE: "Xem thêm",
		NEW_PAGE_GLOW_WILL_CASHBACK: "Glow sẽ hoàn tiền",

		FOOTER_CONTENT_SEO:
			"Glow là nền tảng tuyệt vời dành cho bạn, đặt các dịch vụ massage, spa, làm đẹp và chăm sóc sức khỏe với nhiều ưu đãi tốt nhất trên khắp Việt Nam! Khám phá ưu đãi giảm giá của hơn 5.000 cơ sở Spa, Thẩm mỹ viện, Phòng khám làm đẹp hàng đầu trên toàn quốc, cùng với phần thưởng hoàn tiền sau mỗi lần nhận ưu đãi trên ứng dụng Glow!",
		FOOTER_CONTENT_SEO2: "Glow đem đến trải nghiệm dịch vụ tại nhà độc đáo.",
		FOOTER_CONTENT_SEO3:
			"Massage tại nhà, mọi lúc, mọi nơi! Glow cung cấp dịch vụ massage tại nhà chỉ với 5 phút đặt lịch, có sẵn ở Hà Nội, Thành phố Hồ Chí Minh và Đà Nẵng. Không chỉ massage tại nhà, Glow đa dạng với nhiều dịch vụ như lấy ráy tai, makeup, nail, triệt lông… tại nhà. Cùng Glow tận hưởng và thư giãn ngay chính ngôi nhà yêu thương của bạn sau một ngày làm việc mệt mỏi.",
		FOOTER_CONTENT_SEO4: "Nhận tiền hoa hồng cùng Glow với chương trình giới thiệu.",
		FOOTER_CONTENT_SEO5:
			"Người giới thiệu chia sẻ mã mời với bạn bè, từ đó người giới thiệu nhận hoa hồng 50% hoa hồng khi người được giới thiệu sử dụng dịch vụ trên ứng dụng Glow. Chỉ với một thao tác chia sẻ trên ứng dụng Glow bạn sẽ nhận được 50% hoa hồng trọn đời ngay cả trong khi ngủ.",
		FOOTER_CONTENT_SEO6: "Cài đặt ngay ứng dụng Glow",
		FOOTER_CONTENT_SEO7:
			"Khám phá sự kỳ diệu của Glow - Nền tảng đặt massage, spa, thẩm mỹ viện với nhiều ưu đãi được hơn 10.000 người dùng Glow trên iOS và Android! Cùng Glow đắm chìm trong sự thư giãn với các spa & thẩm mỹ viện hàng đầu. Glow cung cấp dịch vụ massage tại nhà, nơi bạn có thể tận hưởng dịch vụ massage đầy thú vị ngay tại nhà mình bất cứ khi nào bạn muốn. Kỹ thuật viên Massage tại nhà lành nghề, chuyên nghiệp của Glow chỉ cách bạn một chạm, Glow sẵn sàng phục vụ bạn chỉ với 5 phút đặt lịch tại Hà Nội, Thành phố Hồ Chí Minh và Đà Nẵng.",
		FOOTER_CONTENT_SEO8:
			'Bạn sẽ thoải mái khi khám phá các ưu đãi trên Glow an toàn và phù hợp với túi tiền của bạn, cung cấp mọi dịch vụ từ massage, spa, thẩm mỹ viện, phòng khám và các dịch vụ chăm sóc sức khỏe và hơn thế nữa. Dễ dàng tìm thấy các cơ sở xung quanh trên ứng dụng Glow với tính năng "Gần tôi" tiện dụng và đặt lịch hẹn một cách dễ dàng, 24/7. Đừng bỏ những ưu đãi giảm giá khủng hàng ngày và giảm giá độc quyền của Glow cho người dùng mới. Hãy tham gia Glow ngay hôm nay và khám phá trải nghiệm sẽ không có ở bất kỳ nơi nào khác!',

		LOGIN_SUPPORT: "Hỗ trợ",
		LOGIN_ORDER: "Đơn hàng",
		LOGIN_LOG_OUT: "Đăng xuất",
		LOGIN_LOG_IN: "Đăng nhập",
		LOGIN_LOG_IN_RESGISTER: "Đăng nhập / Đăng ký",
		LOGIN_ADD_IMAGE: "Thêm hình ảnh",
		LOGIN_SELECT_SERVICE: "Chọn dịch vụ",
		LOGIN_REVIEW_SUCCESS: "Bạn đã gửi đánh giá thành công",
		LOGIN_SUCCESS_VOUCHER: "Nhận thành công voucher",
		LOGIN_YOUR_WILL_CASHBACK: "Bạn sẽ được Glow hoàn tiền",
		LOGIN_VOUCHER_DETAIL: "Chi tiết dịch vụ",
		LOGIN_VIEW_VOUCHER_DETAIL: "Xem chi tiết dịch vụ",
		LOGIN_READ_REVIEW: "Viết đánh giá",
		LOGIN_CONFIRME: "Đã xác nhận",
		LOGIN_PLEAL_CONTACT: "Bạn hãy liên hệ với cửa hàng để đặt lịch trước khi qua",
		LOGIN_VOUCHER_CODE: "Mã dịch vụ",
		LOGIN_CODE_GLOW_CASHBACK: "Bạn đưa mã cho cửa hàng quét để được Glow hoàn tiền nhé 😊",
		LOGIN_ENTER_SDT:
			"Nhập số điện thoại và mật khẩu dùng để đăng nhập hoặc mở tài khoản nếu bạn lần đầu sử dụng Glow",
		LOGIN_YOUR_PHONE_NUMBER: "Nhập số điện thoại",
		LOGIN_FORGOT_PASSWORD: "Quên mật khẩu",
		LOGIN_CONTINUE: "Tiếp tục",
		LOGIN_ENTER_YOUR_PASSWORD: "Nhập mật khẩu của bạn",
		LOGIN_SDT_LOGIN: "Số điện thoại đăng nhập",
		LOGIN_ENTER_PASSWORD: "Nhập mật khẩu",
		LOGIN_OTP_SDT: "Mã xác nhận OTP đã gửi đến số điện thoại",
		LOGIN_VERIFICATION_SDT: "Xác thực số điện thoại",
		LOGIN_RE_SEND_SMS: "Gửi lại SMS",
		LOGIN_PASSWORD_SIX: "Nhập mật khẩu có ít nhất 6 ký tự",
		LOGIN_CREATED_PASSWORD: "Tạo mật khẩu",
		LOGIN_REGISTER_SUCCESS: "Đăng kí tài khoản thành công",
		LOGIN_INFO: "Thông tin cá nhân",
		LOGIN_HELP_GLOW: "Giúp Glow hiểu thêm về bạn nhé!",
		LOGIN_SELECT_GENDER: "Chọn giới tính",
		LOGIN_COUNTRY: "Quốc tịch",
		LOGIN_SAVE: "Lưu",
		LOGIN_INFO_CALL: "Thông tin liên hệ",
		LOGIN_ONLY: "chỉ với",
		LOGIN_ENTER_REVIEW: "Nhập đánh giá",
		LOGIN_VOUCHER: "Voucher",
		LOGIN_USED: "Đã sử dụng",
		LOGIN_EXPIRED: "Đã hết hạn",

		SUGGESTIONS: "Gợi ý gần bạn",

		GLOW_NO_1: "Glow - Ứng dụng đặt massage tại nhà số 1 Việt Nam",
		GLOW_NO_1_BACKGROUND: "./static/img/Tainhawebsite.png",

		YOUR_PHONE_NUMBER: "Điền số điện thoại của bạn",
		PHONE_NUMBER_TO_LOG_OR_SIGN_UP:
			"Số điện thoại dùng để đăng nhập hoặc mở tài khoản nếu bạn lần đầu sử dụng Glow.",
		APARTMENT: "Chung cư / toà nhà",
		DOWNLOAD_GLOW_APP_APPOINTMENT: "Tải ứng dụng Glow ngay để đặt lịch",

		AGREE_LAW:
			"Với việc đăng nhập vào ứng dụng, bạn đã đồng ý với Quy chế hoạt động, Điều khoản và Chính sách của chúng tôi",

		TITLE_PAGE_HOME_NEW_SERVICE: "Dịch vụ Spa, Làm đẹp",
		LOCATION: "Địa điểm",
		SPA_BEAUTY_CLINIC: "Spa, Thẩm mỹ viện, Phòng khám",
		DETAILS: "Chi tiết",
		CONTACT_PHONE_NUMBER: "Liên hệ tư vấn và đặt lịch:",
		LIST_OF_THERAPISTS: "Danh sách kỹ thuật viên",
		DOWNLOAD_SEE_MORE_OFFERS: "Tải App Glow để xem thêm ưu đãi",
		THERAPISTS: "Kỹ thuật viên",
		THERAPISTS_NEAR_ME: "Kỹ thuật viên gần tôi",
		SEARCH_RESULTS: "Kết quả tìm kiếm:",
		NO_DATA: "Không có dữ liệu",
		NO_RESULTS: "Không tìm thấy kết quả",
		SEARCH: "Tìm kiếm",
		MENU_APP_DOWNLOAD_BUTTON: "Tải App",
		MENU_APP_DOWNLOAD_TITLE: "Glow - Massage tại nhà",
		MENU_APP_DOWNLOAD_CONTENT: "Đặt massage nhanh nhất",
		SERVICE_DES: " Mô tả dịch vụ",
	},
	en: {
		HOME_PAGE: "Home",
		ABOUT_GLOW: "About Glow",
		HOME_PAGE_GLOW_PARTNER: "Become a Glow Partner",
		HOME_PAGE_GLOW_BLOG: "Blog",

		HOME_TITLE_1: "Experience Relaxing Beauty at Home",
		HOME_TITLE_2:
			"A place that offers exclusive Spa and beauty services at home, tailor-made for you. Let us help you unwind and enhance your beauty without leaving your house.",
		HOME_DOWNLOAD: " Download now ",
		HOME_GLOW_PARTNER: "Become a Glow Partner",

		HONE_INSTRAC_TITLE_TOP: "3 Steps to",
		HONE_INSTRAC_TITLE_BOTTOM: "Experience, Simple, Convenient, Few Clicks",
		HONE_INSTRAC_TITLE_1: "Schedule with a Partner",
		HONE_INSTRAC_TITLE_2: "Wait for Connection",
		HONE_INSTRAC_TITLE_3: "Meet Your Partner at the Appointment Point",
		HONE_INSTRAC_CONTENT_1:
			"Visit Glow's website or mobile app, choose a package, and select a suitable time for your schedule with just a few simple touches.",
		HONE_INSTRAC_CONTENT_2:
			"After successfully booking, Glow will connect you with experienced and enthusiastic beauty experts in your area.",
		HONE_INSTRAC_CONTENT_3:
			"Glow's experts will come to your home with modern equipment and quality products, providing you with a relaxing and natural beauty experience in a private space.",

		HOME_SERVICE_TITLE: "Services at Glow",
		HOME_SERVICE_TITLE_1: "Massage",
		HOME_SERVICE_TITLE_2: "Nail",
		HOME_SERVICE_TITLE_3: "Makeup",
		HOME_SERVICE_TITLE_4: "Hairstylist",
		HOME_SERVICE_CONTENT_1: "Health & Relaxation right at home",
		HOME_SERVICE_CONTENT_2: "Own a set of beautiful nails according to your preferences ",
		HOME_SERVICE_CONTENT_3: "Look beautiful everywhere you go",
		HOME_SERVICE_CONTENT_4: "Style your hair to match your event and makeup look",

		HOME_DOWNLOAD_TITLE: "Download the Glow App",
		HOME_DOWNLOAD_CONTENT:
			"A place that offers personalized Spa and beauty services at home. Let us help you relax and enhance your beauty without having to leave home.",
		HOME_DOWNLOAD_IMG: "./static/img/bannerdkEN.png",

		HOME_INTRODUCE_TITLE_1: "Providing health and beauty services at home for you",
		HOME_INTRODUCE_TITLE_1_CONTENT_1:
			"Convenience: Diverse Beauty & Spa services, home appointments, anytime, anywhere",
		HOME_INTRODUCE_TITLE_1_CONTENT_2: "Price: Transparent, clear, no additional costs required",
		HOME_INTRODUCE_TITLE_1_CONTENT_3:
			" Quality: Glow partners are carefully selected, screened, and extensively trained in both expertise and ethics",
		HOME_INTRODUCE_TITLE_2: "Creating income opportunities for everyone",
		HOME_INTRODUCE_TITLE_2_CONTENT_1: "Increase income through a steady stream of customers",
		HOME_INTRODUCE_TITLE_2_CONTENT_2:
			"Advanced training and skills development help partners build their personal brands",
		HOME_INTRODUCE_TITLE_2_CONTENT_3:
			"Glow is ready to accompany partners on their career path, offering skill improvement and even guidance on running a spa business",
		HOME_INTRODUCE_PARTNER: "Sign up to become a Glow Partner ",

		FOOTER_TITLE: "Providing health and beauty services at home for you",
		FOOTER_LINK: "Link",
		FOOTER_HOME_PAGE: "Home",
		FOOTER_ABOUT_GLOW: "About Glow",
		FOOTER_GLOW_PARTNER: "Become a Glow Partner",
		FOOTER_PRIVACY_POLICY: "Privacy Policy",
		FOOTER_TERM_SERVICE: "Terms of Service",
		FOOTER_OPERATING_REGULATION: "Operating Regulations",
		FOOTER_INFOMATION: "Information",
		FOOTER_ADDRESS: "14th Floor, 169 Nguyen Ngoc Vu, Trung Hoa, Cau Giay, Hanoi",
		FOOTER_BUSINESS_NUMBER: "Business Registration Number",

		ABOUT_TITLE_TOP: "The Story of Glow",
		ABOUT_TITLE_BOTTOM: "Wellness and Beauty for Happiness and Enjoying Life",
		ABOUT_TITLE_1: '"Having health means having everything"',
		ABOUT_CONTENT_1:
			'It is our endeavor and dream, especially as humanity has just experienced the Covid-19 pandemic (2019-2022). The crises during the pandemic have somewhat changed our perception of "health" and how we take care of our health on a daily basis.',
		ABOUT_CONTENT_2:
			'"In good health" in modern life is derived from a healthy mental lifestyle, habits, including how we beautify and care for ourselves. Consequently, the need to connect with healthcare service providers such as home massage and beauty services becomes essential. However, the search for these services faces challenges due to geographical barriers, time constraints, and reliability issues, necessitating the emergence of a technology platform that meets criteria for professionalism, credibility, and convenience.',
		ABOUT_TITLE_2: "In 2020,",
		ABOUT_TITLE_2_BOTTOM: "Understanding the demand for massage at home and beauty services from customers",
		ABOUT_CONTENT_3:
			"The Glow App was born in 2020 - proud to be your bridge to a diverse team of skilled healthcare professionals in Vietnam. The Glow App not only acts as a health assistant, helping you find a suitable technician to address musculoskeletal issues or unwind after a stressful workday with massage techniques, but it also serves as a 'Beauty & Mobile Spa,' allowing you to enhance your beauty at home with just a few simple taps on your phone.",
		ABOUT_CONTENT_4:
			"What makes the Glow App well-received and trusted is not only its pioneering role as a reliable companion dedicated to both customers and technicians, but also its commitment to continuous learning, development, and improvement. This brings a positive and sophisticated spirit to the healthcare market in Vietnam, ensuring transparency and benefits for both sides of the Glow App's connection and partnership.",
		ABOUT_CONTENT_5:
			"If health is a garden, the Glow App finds joy in accompanying you on the journey of nurturing your health garden, keeping it lush and full of bright possibilities.",
		ABOUT_CONTENT_6: "Wellness and Beauty for Happiness and Enjoying Life!!",
		ABOUT_CONTENT_7: "Vision",
		ABOUT_CONTENT_8:
			"Become the largest healthcare and beauty platform in Vietnam and expand across the continent.",
		ABOUT_CONTENT_9: "Mission",
		ABOUT_CONTENT_10: "Empowering everyone to be healthier, more beautiful, and happier",
		ABOUT_CONTENT_11: "Core value",
		ABOUT_CONTENT_12: "Connect",
		ABOUT_CONTENT_13: "Trust",
		ABOUT_CONTENT_14: "Understanding",
		ABOUT_CONTENT_15: "Transparency",
		ABOUT_CONTENT_16: "Caring",

		PARTNER_TITLE_TOP: "Become a Glow Partner",
		PARTNER_TITLE_BOTTOM: "Greetings, Esteemed Partners",
		PARTNER_CONTENT_1:
			"Glow appreciates and is grateful for your collaboration with the Glow App. We believe that you are one of the shining diamonds we aspire to discover and connect with customers. Just like the name Glow suggests - radiance, we not only aim for people to conveniently, safely, and quality care for their health through services like massage at home or beauty care, but we also hope that every partner at Glow will always find excitement, passion for their work, and contribute to spreading positive influences to the community.",
		PARTNER_DOWNLOAD: "Download now ",
		PARTNER_TITLE_1: "You will receive special and deserving benefits:",
		PARTNER_TITLE_2: "Income",
		PARTNER_CONTENT2: "Increase earnings through a steady stream of abundant customers.",
		PARTNER_TITLE_3: "Review",
		PARTNER_CONTENT_3: "Glow partners are experienced and evaluated by millions of customers.",
		PARTNER_TITLE_4: "Personal Brand",
		PARTNER_CONTENT_4: "Glow is where partners build their brand and reach millions of potential customers.",
		PARTNER_TITLE_RES: "Guide to Becoming a Glow Partner",
		PARTNER_TITLE_5: "Guide to Becoming a Glow Partner",
		PARTNER_TITLE_DOWNLOAD_1: "Scan the QR code or tap on the icon to download the Glow App.",
		PARTNER_TITLE_DOWNLOAD_2: 'Select "Become a Glow Partner."',
		PARTNER_TITLE_DOWNLOAD_3: "Fill in all the necessary information and be ready to receive orders.",
		PARTNER_SRC_IMG: "./static/img/bannerdkEN.png",

		POLICY_TITLE: "Terms of Service",
		POLICY_UPDATE: "Last updated: April 1, 2023",
		POLICY_TITLE_A: "A. Collection of Personal Information",
		POLICY_CONTENT_1:
			"Personal Information is information about you that is personally identifiable, including but not limited to your name, national identification number, birth certificate number, passport number, nationality, address, phone number, fax number, banking information, credit card information, ethnicity, gender, date of birth, marital status, residency status, educational background, financial status, personal preferences, your email address, profession, your identity in Glow, your information in Glow, your industry, any information about you that you have provided to Glow in registration forms, application forms or any similar forms and/or any information about you that has been or will be collected, stored, used and processed by Glow over time and includes sensitive personal information such as health data, religion or other similar beliefs.",
		POLICY_TITLE_B: "B. Purpose and Scope of Information Use",
		POLICY_TITLE_1: "Scope of information collection",
		POLICY_CONTENT_2:
			"Personal Information is information about users that is personally identifiable, including but not limited to name, national identification number, birth certificate number, passport number, nationality, address, phone number, fax number, banking information, credit card information, ethnicity, gender, date of birth, marital status, residency status, educational background, financial status, personal preferences, email address, profession, user's identity in Glow, user's information in Glow, user's industry, any information about the user that the user has provided to Glow in registration forms, application forms or any similar forms and/or any information about the user that has been or will be collected, stored, used and processed by Glow over time and includes sensitive personal information such as health data, religion or other similar beliefs",
		POLICY_CONTENT_3:
			"The provision of Personal Information by the user is entirely voluntary. However, if the user does not provide Glow with the user's Personal Information, Glow will not be able to process the user's Personal Information for the Purposes and Additional Purposes as set out below:",
		POLICY_CONTENT_4:
			"If the user is an agent, seller or service provider, the provision of the user's Personal Information is mandatory, and the failure to provide the user's Personal Information will be a violation of the law or legal regulations and may cause Glow to be unable to cooperate with the user to provide services or products or make payments to the user for products or services that the user provides.",
		POLICY_CONTENT_5:
			"In addition to the user's Personal Information directly provided to Glow, Glow may collect the user's Personal Information from various sources such as:",
		POLICY_CONTENT_6: "Completing registration forms or application forms or other similar forms;",
		POLICY_CONTENT_7: "From other public sources such as directories;",
		POLICY_CONTENT_8: "From Glow's social media pages if the user follows, likes or is a fan of those pages;",
		POLICY_CONTENT_9: "From credit reporting organizations;",
		POLICY_CONTENT_10: "When the user interacts and communicates with Glow at any event or activity;",
		POLICY_CONTENT_11: "When the user participates in contests organized by Glow",
		POLICY_CONTENT_12: "From many entities or units belonging to Glow; or",
		POLICY_CONTENT_13:
			"By using Glow's websites, including all websites operated by Glow and placed under corresponding brand names (the Websites). The user's Personal Information may be collected from the cookies used on the Websites.",
		POLICY_TITLE_2: "General Purpose:",
		POLICY_TITLE2_CONTENT_1: "To respond to user questions, comments and feedback;",
		POLICY_TITLE2_CONTENT_2: "To contact the user for any purpose listed in this Notice;",
		POLICY_TITLE2_CONTENT_3:
			"To serve internal management purposes such as auditing, data analysis, database storage;",
		POLICY_TITLE2_CONTENT_4: "To serve the purpose of detecting, preventing and prosecuting crimes;",
		POLICY_TITLE2_CONTENT_5: "To assist Glow in complying with legal obligations;",
		POLICY_TITLE_3: "For customers using services provided by Glow:",
		POLICY_TITLE3_CONTENT_1: "To perform Glow's obligations under any agreements signed with customers;",
		POLICY_TITLE3_CONTENT_2: "To provide customers with any requested services;",
		POLICY_TITLE3_CONTENT_3: "To process customer registrations and provide services to customers;;",
		POLICY_TITLE3_CONTENT_4:
			"When customers request to download and use the Glow application (App), or to process customer requests, to provide the App to customers and to provide customers with a license to use the App;",
		POLICY_TITLE3_CONTENT_5:
			"To process customer participation in any event, activity, focus group, survey, contest, promotion, vote, or product;",
		POLICY_TITLE3_CONTENT_6:
			"To process, manage or verify the customer's subscription registration to Glow and to provide customers with benefits for subscribers;",
		POLICY_TITLE3_CONTENT_7:
			"To confirm customer orders and process payments related to any products or services that customers have requested;",
		POLICY_TITLE3_CONTENT_8:
			"To understand and analyze our business as well as the needs and preferences of customers;",
		POLICY_TITLE3_CONTENT_9: "To develop, enhance, and provide products and services to meet customer needs;",
		POLICY_TITLE3_CONTENT_10: "To process product exchanges or returns;",
		POLICY_TITLE3_CONTENT_11:
			"For customers who are agents, sellers, suppliers, partners, contractors or service providers:",
		POLICY_TITLE3_CONTENT_12: "To serve the purpose of cooperating with customers to provide services or products;",
		POLICY_TITLE3_CONTENT_13:
			"To create conditions or allow any inspections that Glow may require to cooperate with customers;",
		POLICY_TITLE3_CONTENT_14: "To process payments related to any products or services that customers provide;",
		POLICY_TITLE3_CONTENT_15: "To contact customers or Glow of customers.",

		SERVICE_TITLE: "Terms of Service",
		SERVICE_UPDATE: "Last updated: April 1, 2023",
		SERVICE_TITLE_A: "A. Service Provision Terms",
		SERVICE_A_CONTENT_1:
			"1. Users must commit to being at least 18 years old when providing services on the Glow e-commerce platform.",
		SERVICE_A_CONTENT_2:
			"2. Prohibited uses of the Glow application include engaging in prostitution or paid dating. Users engaging in such activities will have their accounts locked and be held responsible under the law for their actions.",
		SERVICE_A_CONTENT_3:
			"3. Any sensitive and offensive content or images are strictly prohibited. Such content will be immediately deleted, and users' accounts will be permanently suspended.",
		SERVICE_TITLE_B: "B. Some Fees on Glow Users Should Be Aware Of",
		SERVICE_B_CONTENT_1:
			"1. For Technical Partner: For every successful order on the Glow system, Glow will charge a 20% - 40% fee from the Technical Partner.",
		SERVICE_B_CONTENT_2:
			"2. For customers: When customers withdraw money from the Glow wallet, a 3% fee will be charged on each withdrawal transaction. Please contact our hotline at 0888129100 to request a withdrawal.",
		SERVICE_TITLE_C: "C. Contractual Relationship",
		SERVICE_C_CONTENT_1:
			"These Terms of Use (Terms) govern your access to or use of the applications, websites, content, products, and services (Services) of Glow Corporation, a joint stock company, from any country worldwide.",
		SERVICE_C_CONTENT_2:
			"Your access to and use of the Services constitutes your acceptance of these Terms, and this acceptance establishes a contractual relationship between you and Glow. If you do not agree to these Terms, you do not have the right to access or use the Services. These Terms replace any prior agreements or contracts. Glow may terminate these Terms or any Services related to you, or cease to provide or deny access to the Services or any part thereof, at any time for any reason.",
		SERVICE_C_CONTENT_3:
			"Additional terms may apply to specific Services, such as policies for specific events, activities, or promotions, and these additional terms will be communicated to you in relation to the applicable Services. Additional terms added will be considered part of the Terms for the purposes of the applicable Services. Supplementary terms will take precedence over these Terms in the event of conflicts related to the applicable Services.",
		SERVICE_C_CONTENT_4:
			"Glow may modify the Terms related to the Services at any time. The modifications will take effect when Glow posts the updated Terms at this location or the revised policies or additional terms regarding the Services. If you continue to access or use the Services after these postings, it means you agree to the modified Terms.",
		SERVICE_C_CONTENT_5:
			"The collection and use of personal information related to our Services are regulated in Glow's Privacy Policy at https://glowvietnam.com/privacy-policy/. Glow may provide necessary information (including your contact information) to employees processing compensation requests or insurance businesses in case of compensation requests, disputes, or conflicts, including accidents, involving you and a Third-Party Provider, and information or data necessary to resolve compensation requests, disputes, or conflicts.",
		SERVICE_TITLE_D: "D. Services ",
		SERVICE_D_CONTENT:
			"The Services constitute a technology platform that allows users to use Glow's mobile applications or websites provided by Glow as part of the Services (collectively referred to as the Applications) to arrange and schedule services and/or spa services with independent third-party providers of these services, including independent third-party service providers and independent third-party spa providers under agreements with Glow or some of Glow's branches (Third-Party Providers). Unless Glow gives separate written approval, these Services are provided solely for personal, non-commercial use.",
		SERVICE_D_TITLE_1: "License",
		SERVICE_D_TITLE_1_CONTENT:
			"Subject to your compliance with these Terms, Glow will grant you a limited, non-exclusive, non-transferable, revocable, and non-sub licensable license to: (i) access and use the Applications on personal devices solely for your use of the Services; and (ii) access and use any content, information, and materials related to the Services that may be available through the Services, solely for your personal, non-commercial use in each case. All rights not expressly granted by this Agreement are reserved by Glow and its licensors.",
		SERVICE_D_TITLE_2: "Limitations",
		SERVICE_D_TITLE_2_CONTENT:
			"You may not: (i) remove any copyright, trademark, or proprietary notices from any portion of the Services; (ii) reproduce, modify, create derivative works based upon, distribute, license, lease, sell, resell, transfer, publicly display, publicly perform, transmit, broadcast, or otherwise exploit the Services except as expressly permitted by Glow; (iii) reverse engineer, decompile, or disassemble the Services, except as permitted by applicable law; (iv) link to, mirror, or frame any portion of the Services; (v) cause or launch any programs or scripts for the purpose of scraping, indexing, surveying, or otherwise data mining any portion of the Services or unduly burdening or hindering the operation and/or functionality of any part of the Services; or (vi) attempt to gain unauthorized access to or impair any aspect of the Services or its related systems or networks.",
		SERVICE_D_TITLE_3: "Third-Party Services and Content",
		SERVICE_D_TITLE_3_CONTENT:
			"The Services may be made available or accessed in connection with third-party services and content (including advertising) that Glow does not control. You acknowledge that different terms of use and privacy policies may apply to your use of third-party services and content. Glow does not endorse third-party services and content, and in no event shall Glow be responsible or liable for any products or services of such third-party providers. Additionally, Apple Inc., Google, Inc., and/or their applicable international subsidiaries and affiliates will be third-party beneficiaries to this contract if you access the Services using Applications developed for Apple iOS, and Android mobile devices. These third-party beneficiaries are not parties to this contract and are not responsible for the provision or support of the Services in any manner. Your access to the Services using these devices is subject to terms set forth in the applicable third-party beneficiary's terms of service.",
		SERVICE_D_TITLE_4: "Ownership Rights",
		SERVICE_D_TITLE_4_CONTENT:
			"The Services and all rights in this text are the property of Glow or the property of Glow's licensors. These Terms and your use of the Services do not grant you any rights: (i) with respect to these Services, except for the limited license granted above; or (ii) to use or reference Glow's company name, logo, product and service names, trademarks, or service marks or those of Glow's licensors under any circumstances.",
		SERVICE_TITLE_E: "E. Using Glow Services",
		SERVICE_E_TITLE_1: "User Account",
		SERVICE_E_TITLE_1_CONTENT:
			"To utilize most aspects of the Service, you must register and maintain an active personal user account (Account). You must be at least 18 years old or of legal age of majority in your jurisdiction (if different from 18) to have an Account. Registering an account requires you to provide certain personal information to Glow, such as your name, address, mobile phone number, and age, as well as at least one valid payment method (or credit card or approved payment partner). You agree to maintain accurate, complete, and up-to-date information in your Account. Failure to maintain accurate, complete, and up-to-date Account information, including providing an invalid or expired payment method in your profile, may result in your loss of access to and use of the Service or termination of this Agreement between you and Glow. You are responsible for all activities that occur under your Account, and you agree to maintain the security and confidentiality of your username and Account password at all times. Unless explicitly permitted by Glow in writing, you may only possess one Account.",
		SERVICE_E_TITLE_2: "User Requirements and Conduct",
		SERVICE_E_TITLE_2_CONTENT_1:
			"Services are not provided to users under 18 years old. You may not authorize a third party to use your Account, and you may not allow individuals under 18 years old to receive transportation or logistics services from Third-Party Providers unless they are accompanied by you. You may not transfer or assign your Account to any individual or legal entity. You agree to comply with all applicable laws when using the Services, and you may only use the Services for lawful purposes. When using the Services, you may not cause annoyance, inconvenience, harm, or property damage to Third-Party Providers or any other parties. In some cases, you may be required to provide access or usage credentials, and you agree that you may be denied access or use of the Services if you refuse to provide the required credentials.",
		SERVICE_E_TITLE_2_CONTENT_2:
			"Any efforts to attract customers to the Glow system are strictly prohibited. Attracting customers to the Glow system is understood as privately negotiating with Glow's Customers (including employees) to provide Glow Vietnam services without going through the Glow system. Glow reserves the right to refuse service or suspend accounts without prior notice for such behavior. For each Customer (including employees), you will be required to compensate Glow 5,000,000 VND/01 person.",
		SERVICE_E_TITLE_2_CONTENT_3:
			"Customers and partners must comply with Vietnamese law in case of excessive actions or violations. Glow is not responsible for the actions of customers with partners, or partners with customers. In the event of litigation or disputes, customers and partners will work directly with each other, and Glow will provide necessary information upon request from authorized agencies.",
		SERVICE_E_TITLE_3: "Text Messages",
		SERVICE_E_TITLE_3_CONTENT:
			"By creating an Account, you agree that the Services may send you text message notifications (SMS) as part of the normal business operation of using the Services. You can choose not to receive text message notifications (SMS) from Glow at any time by sending an email to support@glowvietnam.com stating that you no longer wish to receive such messages, along with the mobile phone number receiving the messages. You acknowledge that choosing not to receive text message notifications (SMS) may affect your use of the Services.",
		SERVICE_E_TITLE_4: "Promo Codes",
		SERVICE_E_TITLE_4_CONTENT:
			"Glow may create promotional codes to redeem Account credit, features, or other benefits related to these Services and/or the services of a Third-Party Provider, depending on any additional terms established by Glow for each promotional code (Promo Code). You agree that Promo Codes: (i) must be used for intended recipients and purposes, in a manner consistent with the law; (ii) may not be copied, sold, or transferred in any way, or publicly disclosed (whether publicly posted or otherwise), except with the permission of Glow Vietnam; (iii) may be disabled by Glow at any time for any reason for which Glow Vietnam is not responsible; (iv) can only be used according to specific terms established by Glow Vietnam for that Promo Code; (v) have no cash value; and (vi) may expire before you use them. Glow has the right to withhold or deduct credits, features, or other benefits obtained through the use of your Promo Codes or any other user in cases where Glow determines or believes that using or redeeming the Promo Codes is erroneous, fraudulent, illegal, or in violation of applicable Promo Code terms or these Terms.",
		SERVICE_E_TITLE_5: "User-Provided Content",
		SERVICE_E_TITLE_5_CONTENT_1:
			"Glow may permit you to submit, upload, publish, or provide to Glow, through text, audio, and/or visual features of the Service, content and information including comments and feedback related to the Services, support requests, and submissions for contests and promotions (User Content) at various times. Any User Content you provide remains your property. However, by providing User Content to Glow, you grant Glow a non-exclusive, irrevocable, transferable, worldwide, sublicensable license to use, copy, modify, create derivative works from, distribute, publicly perform, publicly display, and exploit in any way such User Content in all formats and distribution channels currently known or hereafter devised (including in connection with the Services and Glow's business operations and on third-party websites and services), without further notice to or consent from you, and without requiring you or any other person or entity to make any payment.",
		SERVICE_E_TITLE_5_CONTENT_2:
			"You represent and warrant that: (i) you are the sole and exclusive owner of all User Content, or you have all rights, licenses, consents, and releases necessary to grant Glow the license to the User Content as set forth above; and (ii) the User Content or information you submit, upload, publish, or provide to User Content, or Glow Vietnam's use of the User Content as permitted by this Agreement, will not violate, misappropriate, infringe upon the intellectual property rights or proprietary rights, or public or privacy rights of any third party, or result in the violation of any applicable laws or regulations.",
		SERVICE_E_TITLE_5_CONTENT_3:
			"You agree not to provide User Content that is defamatory, libelous, hateful, violent, obscene, sexual, unlawful, or otherwise offensive, as determined by Glow at its sole discretion, regardless of whether such material may be protected by law. Glow may, but has no obligation to, review, monitor, or delete User Content at Glow Vietnam's sole discretion and at any time for any reason without prior notice.",
		SERVICE_E_TITLE_6: "Network Access and Devices",
		SERVICE_E_TITLE_6_CONTENT:
			"You are responsible for obtaining the data network access necessary to use the Services. Your mobile network's data and messaging rates and fees may apply if you access or use the Services from a wireless-enabled device, and you are responsible for such rates and fees. You are responsible for acquiring and updating compatible hardware or devices necessary to access and use the Services and any updates. Glow does not guarantee that the Services, or any portion thereof, will function on any particular hardware or devices. Furthermore, the Services may be subject to malfunctions and delays inherent in the use of the Internet and electronic communications.",
		SERVICE_TITLE_F: "F. Payment",
		SERVICE_F_CONTENT_1:
			"You understand that the use of the Services may incur charges for services or goods you receive from a third-party provider (Fees). Upon receiving services or goods through the use of the Services, Glow will facilitate the payment of applicable Fees on behalf of the third-party provider as the payment collection agent of such third-party provider. Payment of the Fees in such manner shall be considered the same as payment made directly by you to the third-party provider. The Fees will include any applicable taxes required by law. The Fees you pay are final and non-refundable, unless otherwise determined by Glow. You retain the right to request a lower Fee from a third-party provider for services or goods received from a third-party provider at the time you receive the services, goods. Glow will respond to any request from a third-party provider to modify the Fee for a specific service or good.",
		SERVICE_F_CONTENT_2:
			"All Fees must be paid immediately and payment will be facilitated by Glow Vietnam using the preferred payment method designated in your Account. If your primary Account payment method is determined to be expired, invalid or otherwise not able to be charged, you agree that Glow may, as the third-party provider’s payment collection agent, use a secondary payment method in your Account, if available.",
		SERVICE_F_CONTENT_3:
			"Between you and Glow, Glow reserves the right to establish, remove and/or revise Fees for any or all services or goods obtained through the use of the Services at its sole discretion at any time. Furthermore, you acknowledge and agree that Fees applicable in certain geographic areas may substantially increase during times of high demand. Glow will use reasonable efforts to inform you of applicable Fees that may apply, provided that you will be responsible for Fees incurred under your Account regardless of your awareness of such Fees or the amounts thereof. At times, Glow may offer certain users promotions and discounts that may result in different amounts charged for the same or similar services or goods obtained through the use of these Services, and you agree that such promotional or discount programs will have no bearing on your use of the Services or the Fees applied to you, unless also provided to you. You may elect to cancel your request for services or goods from a third-party provider at any time prior to the third-party provider's provision of such services, in which case you may be charged a cancellation fee.",
		SERVICE_F_CONTENT_4:
			"This payment structure is intended to fully offset the third-party provider’s cost for the services or goods provided. Glow does not designate any portion of your payment as a gratuity or tip to the third-party provider. Any statement by Glow (on Glow's website, in the App, or in Glow's marketing materials) regarding tips being “voluntary,” “optional,” and/or “included” in your payment for services or goods provided, is not intended as an implication that Glow will provide any additional amounts beyond those described above to any third-party provider. You understand and agree that, while you are free to provide additional payment as a gratuity to any third-party provider who provides you with services or goods obtained through the Services, you are under no obligation to do so. Gratuity is voluntary. After you have received services or goods obtained through the Services, you will have the opportunity to rate your experience and leave additional feedback about your third-party provider.",
		SERVICE_TITLE_G: "G. Disclaimer",
		SERVICE_G_CONTENT:
			'The services are provided "as is" and "as available." Glow disclaims all warranties and representations, express, implied, or statutory, not expressly set forth in these terms, including the implied warranties of merchantability, fitness for a particular purpose, and non-infringement. In addition, Glow makes no representation, warranty, or guarantee regarding the reliability, timeliness, quality, suitability, or availability of the services, the services or goods requested through the use of the services, or that the services will be uninterrupted or error-free. Glow Vietnam does not guarantee the quality, suitability, safety, or ability of third-party providers. You agree that the entire risk arising out of your use of the services, and any service or good requested in connection therewith, remains solely with you, to the maximum extent permitted under applicable law.',
		SERVICE_TITLE_H: "H. Limitation of Liability",
		SERVICE_H_CONTENT_1:
			"Glow shall not be liable for indirect, incidental, special, exemplary, punitive, or consequential damages, including lost profits, lost data, personal injury, or property damage, related to, in connection with, or otherwise resulting from any use of the services, even if glow has been advised of the possibility of such damages. Glow Vietnam shall not be liable for any damages, liability, or losses arising out of:",
		SERVICE_H_CONTENT_2:
			"(i) your use of or reliance on the services or your inability to access or use the services; or (ii) any transaction or relationship between you and any third-party provider, even if glow has been advised of the possibility of such damages.",
		SERVICE_H_CONTENT_3:
			"Glow shall not be liable for delay or failure in performance resulting from causes beyond glow vietnam's reasonable control. You acknowledge that third-party providers providing services requested through some request brands may offer services and/or may operate under required business licenses or permits, or may not be licensed or permitted to operate at all. In no event shall glow's total liability to you in connection with the services for all damages, losses, and causes of action exceed five hundred thousand dong (VND 500,000).",
		SERVICE_H_CONTENT_4:
			"The limitations and disclaimers in this section do not purport to limit liability or alter your rights as a consumer that cannot be excluded under applicable law.",
		SERVICE_TITLE_I: "I. Indemnification",
		SERVICE_I_CONTENT:
			"You agree to indemnify and hold Glow and its officers, directors, employees, and agents harmless from any and all claims, demands, losses, liabilities, and expenses (including attorneys' fees) arising out of or in connection with: (i) your use of the services or services or goods obtained through your use of the services; (ii) your breach or violation of any of these terms; (iii) Glow's use of your user content; or (iv) your violation of the rights of any third-party, including third-party providers.",

		REGULATION_TITLE: "Operating Regulations",
		REGULATION_UPDATE: " Last updated: April 1, 2023 ",
		REGULATION_CONTENT:
			" The Glow Application is an electronic commerce platform that serves the purpose of connecting service providers in the fields of Spa, Massage, Therapy, Beauty, etc., with individuals seeking to utilize Spa and Beauty services, among others. The Glow Application is designed to provide maximum support to users who want to access online information about various types of services or make online bookings for these services.",
		REGULATION_I: " I. General Principles ",
		REGULATION_I_CONTENT_1:
			" The Glow electronic trading platform is operated and managed by BK VIETNAM TECHNOLOGY JOINT STOCK COMPANY (the Company). Users on the electronic trading platform include traders and organizations engaged in legal Spa and Massage services recognized and authorized by Glow, and are allowed to use services provided by the Glow Electronic Commerce Trading Platform and related parties.",
		REGULATION_I_CONTENT_2:
			" These principles apply to registered users who use and participate in posting listings on the Glow Electronic Commerce Trading Platform.",
		REGULATION_I_CONTENT_3:
			" Traders, organizations, and individuals participating in transactions on the Glow Electronic Commerce Trading Platform are free to negotiate on the basis of respecting the legitimate rights and interests of the parties involved in the use of services through contracts, without violating legal regulations.",
		REGULATION_I_CONTENT_4:
			" Information about traders and organizations participating as users on Glow must be transparent and accurate.",
		REGULATION_I_CONTENT_5:
			" Services participating in transactions on the Glow Electronic Commerce Trading Platform must fully comply with relevant legal regulations, and must not fall under prohibited business activities or prohibited advertisements as stipulated by law.",
		REGULATION_I_CONTENT_6:
			" Transactions conducted via the Glow Electronic Commerce Trading Platform must be conducted openly and transparently, ensuring the rights of customers/users of services.",
		REGULATION_I_CONTENT_7: "",
		REGULATION_I_CONTENT_8: "",
		REGULATION_II: " II. General Regulations ",
		REGULATION_II_CONTENT_1:
			'  Name of Electronic Commerce Trading: The Glow Electronic Commerce Trading Platform developed by BK VIETNAM TECHNOLOGY JOINT STOCK COMPANY with the application name: Glow (hereinafter referred to as: "Glow").',
		REGULATION_II_CONTENT_2: " General Definitions:",
		REGULATION_II_CONTENT_3:
			"  Technician: A person who has the need to provide services through Glow, including posting information about Spa and Massage services.",
		REGULATION_II_CONTENT_4:
			"  Customer (customer/user): Traders, organizations, individuals with the need to use services posted on Glow.",
		REGULATION_II_CONTENT_5: " User: Includes both technicians and customers (Technicians and Customers).",
		REGULATION_II_CONTENT_6:
			" Users participating in transactions on Glow are traders, organizations, and individuals with the need to use services on the website.",
		REGULATION_II_CONTENT_7:
			" Users must initially register and provide relevant personal information, recognized by the Glow Management Board, and authorized to use services provided by Glow.",
		REGULATION_II_CONTENT_8: " When you register as a user of Glow, you understand that:",
		REGULATION_II_CONTENT_9: " Users can create their own personal accounts to use.",
		REGULATION_II_CONTENT_10:
			" Users can schedule services at the correct price and standards as committed by legitimate traders published on Glow.",
		REGULATION_II_CONTENT_11: "",
		REGULATION_III: " III. Transaction Procedures ",
		REGULATION_III_1: " 1. Procedures for Customers ",
		REGULATION_III_1_CONTENT_1:
			" When customers have the intention to purchase goods on Glow, they should follow the steps below:",
		REGULATION_III_1_CONTENT_2: " Search, reference service information",
		REGULATION_III_1_CONTENT_3:
			" Customers will select and schedule appointments based on the information provided by Technicians. After making their selection, they can press the appointment button, fill in their information, and proceed with the payment.",
		REGULATION_III_1_CONTENT_4: " Technicians will contact customers to confirm the schedule.",
		REGULATION_III_2: " 2. Procedures for Technicians and Glow Management Board ",
		REGULATION_III_21: "2.1. Account Creation",
		REGULATION_III_21_CONTENT:
			" - Registering an account: Technicians register an account on the Glow application. ",
		REGULATION_III_22: "2.2. Registering to provide services",
		REGULATION_III_22_CONTENT_1: " - Technicians access the registration section to sign up as Partners.",
		REGULATION_III_22_CONTENT_2: " - Technicians provide complete personal information.",
		REGULATION_III_22_CONTENT_3: " Select Save to store personal information",
		REGULATION_III_23: "2.3. Procedures for the Glow Management Board",
		REGULATION_III_23_CONTENT_1:
			" The information will be saved on the administration page and displayed on the Glow application.",
		REGULATION_III_23_CONTENT_2:
			" The management board performs post-audit tasks combined with keyword filtering tools to review information from Users and Technicians.",
		REGULATION_III_3: " 3. Return and Refund Policy ",
		REGULATION_III_3_CONTENT_1:
			" Since Glow is not the service provider, the return and exchange of services will be carried out according to the policy of each Technician.",
		REGULATION_III_3_CONTENT_2: " Glow requires Technicians to provide complete service information when posting.",
		REGULATION_III_3_CONTENT_3:
			" Glow recommends users to carefully read information or directly contact Technicians to understand the service before making an appointment.",
		REGULATION_III_3_CONTENT_4: " Glow will assist users within its capabilities regarding returns and refunds.",
		REGULATION_III_4: " 4. Dispute Resolution and Complaint Support Procedures ",
		REGULATION_III_4_CONTENT_1:
			"  Step 1: Users who have complaints about Technicians' services can email: binh.do@glowvietnam.com. Users can also directly report to the administration. BK VIETNAM TECHNOLOGY JOINT STOCK COMPANY",
		REGULATION_III_4_CONTENT_2:
			" Step 2: Glow's Customer Care department will receive complaints from users. Depending on the nature and severity of the complaint, Glow will take specific measures to assist users in resolving the dispute.",
		REGULATION_III_4_CONTENT_3:
			" Step 3: In cases beyond the scope and jurisdiction of Glow, the management board will request customers to escalate the matter to a competent state authority for resolution according to the law.",
		REGULATION_III_4_CONTENT_4: " Users can send complaints to the address:",
		REGULATION_III_4_CONTENT_5: " BK VIETNAM TECHNOLOGY JOINT STOCK COMPANY",
		REGULATION_III_4_CONTENT_6:
			" Address: Floor 14, No. 169 Nguyen Ngoc Vu, Trung Hoa Ward, Cau Giay District, Hanoi, Vietnam",
		REGULATION_III_4_CONTENT_7: " Tel: 0888129100 ",
		REGULATION_III_4_CONTENT_8: " Email: binh.do@glowvietnam.com",
		REGULATION_III_4_CONTENT_9: " Complaint, Warning, Dispute Regulations",
		REGULATION_III_4_CONTENT_10: " All posts must meet the following conditions, otherwise, they will be blocked:",
		REGULATION_III_4_CONTENT_11: " The subject of the report is a Glow user;",
		REGULATION_III_4_CONTENT_12: " The incident must be related to the user's post on Glow;",
		REGULATION_III_4_CONTENT_13: " Concrete evidence must be provided; ",
		REGULATION_III_4_CONTENT_14: " No offensive, abusive, threatening language;",
		REGULATION_III_4_CONTENT_15: " Complaints must be specific and clear, while also including:",
		REGULATION_III_4_CONTENT_16: " The account of the complaining user.",
		REGULATION_III_4_CONTENT_17: " Relevant evidence link.",
		REGULATION_III_4_CONTENT_18:
			" Glow respects and seriously implements legal regulations for protecting customer (user) rights. Therefore, users are advised to provide complete, accurate, truthful, and detailed information related to the service when posting on the platform. Any deceptive or fraudulent business activities will be condemned and held fully accountable before the law.",
		REGULATION_III_4_CONTENT_19:
			" All parties, including Technicians and Users, must take active responsibility in problem-solving. Technicians need to provide documentation authenticating the information related to the conflicting incident to Users. Glow will provide information about Users and Technicians when requested by users or parties involved in the dispute.",
		REGULATION_III_4_CONTENT_20:
			" After Technicians and Users have resolved the dispute, they must inform the Glow administration. In the event of a conflicting transaction in which the fault lies with the Technician, Glow will issue warnings, lock the account, or transfer the case to the competent legal authority based on the severity of the violation. Glow will terminate and remove all service information related to the Technician on the platform, while also requiring the Technician to make reasonable compensation to customers based on agreements with users.",
		REGULATION_III_4_CONTENT_21:
			" If, through mutual agreement, the dispute between the two parties (User and Technician) cannot be resolved, one of the parties (User or Technician) has the right to seek intervention from the competent legal authority to ensure the legitimate interests of all parties, especially users.",
		REGULATION_IV: " IV. Payment Procedures",
		REGULATION_IV_1: " 1. Payment of Order Discount Percentage between Technician and Glow Trading Platform Owner",
		REGULATION_IV_1_CONTENT:
			" For Technicians (service providers): For each successful order on the Glow system, Glow will charge a % fee from the service-providing users. This fee is essential for Glow to maintain the system and promote the brand.",
		REGULATION_IV_2: " 2. Payment between Users and Technicians",
		REGULATION_IV_2_CONTENT_1:
			" Users and Technicians carry out payments through Glow and according to the payment methods specified by Glow.",
		REGULATION_IV_2_CONTENT_2: " Customers can make payments through the Glow wallet.",
		REGULATION_IV_2_CONTENT_3:
			" For the electronic wallet payment method, customers will deposit money into the VND wallet. Click on the deposit option. The deposit interface will include the deposit amount and deposit method (bank transfer, Visa).",
		REGULATION_IV_2_CONTENT_4:
			" If you wish to withdraw money from the wallet, please contact BK VIETNAM TECHNOLOGY JOINT STOCK COMPANY. Address: Floor 14, No. 169 Nguyen Ngoc Vu, Trung Hoa Ward, Cau Giay District, Hanoi, Vietnam",
		REGULATION_IV_3: " 3. Ensuring Transaction Security",
		REGULATION_IV_3_CONTENT_1: " To ensure successful transactions and minimize potential risks:",
		REGULATION_IV_3_CONTENT_2:
			" Technicians must provide complete information (name, address, phone number, email) in the personal information section.",
		REGULATION_IV_3_CONTENT_3:
			" Users should not provide detailed payment information to anyone via email or other forms of contact. Glow is not responsible for any losses or risks that users may incur in exchanging their information over the Internet or email.",
		REGULATION_IV_3_CONTENT_4:
			" Users must not use any programs, tools, or other methods to interfere with the system or alter the data structure. Distributing, propagating, or encouraging any activities to interfere, disrupt, or intrude into the website system is strictly prohibited. Any violations will be dealt with according to the Regulations and legal provisions.",
		REGULATION_IV_3_CONTENT_5:
			" All transaction information is kept confidential, except when required to be disclosed by legal authorities.",
		REGULATION_V: " V. User Personal Information Protection Policy",
		REGULATION_V_1: " 1. Purpose and Scope of Collection",
		REGULATION_V_1_CONTENT_1: " The information collected when registering an account on the Glow application: ",
		REGULATION_V_1_CONTENT_2:
			" For Technicians (service providers): When Technicians want to have an account on the Glow Platform, they register on the Glow application, providing complete information such as phone number, email, name, login password.",
		REGULATION_V_1_CONTENT_3:
			" - For Users: Users registering an account on the Glow application need to provide information including phone number, email, name, login password.",
		REGULATION_V_1_CONTENT_4: " During Usage:",
		REGULATION_V_1_CONTENT_5:
			" - For Technicians (service providers): Technicians will provide information about the services they are providing and must regularly update current addresses and contact information.",
		REGULATION_V_1_CONTENT_6:
			" - For Users: If users choose services at home or any other location, they must provide address and contact information.",
		REGULATION_V_1_CONTENT_7: "  The information provided by users can be used for the following purposes:",
		REGULATION_V_1_CONTENT_8: " + Providing services on the Glow Application as requested by users;",
		REGULATION_V_1_CONTENT_9: " + Sending service introduction information on the Glow Application to new users;",
		REGULATION_V_1_CONTENT_10:
			" + Analyzing, evaluating, and improving services (including the Application), technology, processes;",
		REGULATION_V_1_CONTENT_11: " + Enhancing interaction and connections with users;;",
		REGULATION_V_1_CONTENT_12: " + Resolving disputes and complaints related to the use of the Glow Application;",
		REGULATION_V_1_CONTENT_13: " + Preventing illegal activities in Vietnam.",
		REGULATION_V_1_CONTENT_14:
			" - Without the user's consent, Glow will not provide any user-related information to third parties for advertising purposes.  ",
		REGULATION_V_2: " 2. Authorized Access to Information",
		REGULATION_V_2_CONTENT_1:
			" Users agree that, when necessary, the following agencies/organizations/individuals have the right to access and collect users' personal information, including:",
		REGULATION_V_2_CONTENT_2: " - Technicians/service providers",
		REGULATION_V_2_CONTENT_3: " - Transport, Payment service providers ",
		REGULATION_V_2_CONTENT_4: " - Customer care department",
		REGULATION_V_2_CONTENT_5: " - Glow Trading Platform Administrator",
		REGULATION_V_2_CONTENT_6: " - Competent state agencies (in case of legal requirement)",
		REGULATION_V_2_CONTENT_7: "  - Complainants providing evidence of user violations (if any)  ",
		REGULATION_V_3: " 3. Address of the Glow Trading Platform Operator:",
		REGULATION_V_3_CONTENT_1: " BK VIETNAM TECHNOLOGY JOINT STOCK COMPANY",
		REGULATION_V_3_CONTENT_2:
			" Address: Floor 14, No. 169 Nguyen Ngoc Vu, Trung Hoa Ward, Cau Giay District, Hanoi, Vietnam",
		REGULATION_V_3_CONTENT_3: " Tel: 0888129100",
		REGULATION_V_3_CONTENT_4: " Email: binh.do@glowvietnam.com ",
		REGULATION_V_4: " 4. Storage Period",
		REGULATION_V_4_CONTENT_1:
			" + Users can request Glow to delete personal data when they are no longer users of the Glow Application. + User information is stored for a necessary period to serve the user's requests.",
		REGULATION_V_5: " 5. Method of Changing Personal Information",
		REGULATION_V_5_CONTENT_1:
			" Users are granted an account with an account name and password to access the Glow Application. After logging in, users can edit personal information.",
		REGULATION_V_5_CONTENT_2:
			" The Glow Application commits to securing user information, making efforts, and using appropriate measures to protect the information that users provide to the Glow Application during the use of services on the Glow Application.  ",
		REGULATION_V_5_CONTENT_3:
			" Not selling or transferring data information to third parties without the user's permission, except in cases required to provide user information to competent state agencies by writing or other legal provisions.",
		REGULATION_V_5_CONTENT_4:
			" In the event that the server storing user information is attacked leading to data loss, the Glow Application will be responsible for notifying the functional authorities for timely investigation and notifying users.",
		REGULATION_V_5_CONTENT_5:
			" If incorrect user information is found on the Glow Application, the Glow Application will delete all content posted by that user on the Glow Application.",
		REGULATION_V_5_CONTENT_6: " Users need to provide information in the following cases:",
		REGULATION_V_5_CONTENT_7: " - Access, order, use services on the Glow Application;",
		REGULATION_V_5_CONTENT_8: " - Request for quotation, providing information, services, or support;",
		REGULATION_V_5_CONTENT_9:
			" - Participate in surveys, prize competitions, or other promotional and advertising activities;",
		REGULATION_V_5_CONTENT_10: " - Register for receiving newsletters, advertising emails, or other types of news;",
		REGULATION_V_5_CONTENT_11: " - Register to participate in recruitment, submit applications, resumes;",
		REGULATION_V_5_CONTENT_12:
			" - Collecting and using user information can only be done with the user's consent by registering an account on the Glow Application. ",
		REGULATION_V_6:
			" 6. Collecting and using user information can only be done with the user's consent by registering an account on the Glow Application.",
		REGULATION_V_6_CONTENT_1:
			" User personal information is committed to absolute confidentiality according to the personal information protection policy. The collection and use of user information are only carried out with the consent of the user, except for cases where the law has other regulations.",
		REGULATION_V_6_CONTENT_2:
			" Users can send complaints directly or indirectly to the business by sending information to the company's address or via email: binh.do@glowvietnam.com",
		REGULATION_V_6_CONTENT_3:
			" Glow's customer care department will support users in sending complaints related to businesses through the fastest methods.",
		REGULATION_V_6_CONTENT_4:
			" The company is responsible for implementing technical and professional measures to verify the reported content. The processing time for reflections related to personal information is 7 days. ",
		REGULATION_VI: " VI. User Rights Protection ",
		REGULATION_VI_CONTENT_1:
			" The Glow Platform's management requires individuals to provide complete and relevant personal information when registering an account, including: Full name, contact address, email, phone number, and so on, and be responsible for the legal accuracy of the provided information. The Glow Platform's management is not responsible for and will not address any complaints related to the user's rights if it is found that all personal information provided by the user during initial registration is inaccurate.",
		REGULATION_VI_CONTENT_2:
			" Users have the right to directly file complaints and request compensation from relevant Technicians in cases where the service provided by the Technician is not accurate.",
		REGULATION_VI_CONTENT_3:
			" The Glow E-commerce Platform always ensures that the Technician who provides the service takes responsibility for compensation to the user. This is to protect the legitimate rights of users in cases of transaction conflicts that affect user interests.",
		REGULATION_VII: " VII. Management of Negative Information ",
		REGULATION_VII_1: " 1. Content Control ",
		REGULATION_VII_1_CONTENT_1:
			" Content on the Glow Platform is information about Technicians for users to choose, therefore Technician information must be accurate and truthful.",
		REGULATION_VII_1_CONTENT_2: " Specific regulations:",
		REGULATION_VII_1_CONTENT_3: " -Language: Posts must use the Vietnamese language",
		REGULATION_VII_1_CONTENT_4:
			" -Images: Real photos are encouraged, and Glow recommends image files with a minimum size of 640x480 pixels. Uploaded images must be clear and undistorted.",
		REGULATION_VII_1_CONTENT_5: " -Price: Prices must be provided in Vietnamese Dong (VND).",
		REGULATION_VII_1_CONTENT_6: " Prohibited behaviors:",
		REGULATION_VII_1_CONTENT_7: " - Posting content with language contrary to moral standards, social ethics.",
		REGULATION_VII_1_CONTENT_8:
			"  - Posting unrelated advertisements for Spa, massage services provided by the Platform.",
		REGULATION_VII_1_CONTENT_9: " • Advertising:",
		REGULATION_VII_1_CONTENT_10:
			" - Aesthetic-less advertisements that go against the historical, cultural, ethical, and traditional values of Vietnam.",
		REGULATION_VII_1_CONTENT_11:
			" - Advertisements that offend the reputation, dignity, and human worth of organizations and individuals.",
		REGULATION_VII_1_CONTENT_12:
			" - Advertisements that engage in unhealthy competition as defined by competition laws.",
		REGULATION_VII_1_CONTENT_13: " - Advertisements that violate intellectual property laws.",
		REGULATION_VII_2: " 2. Control of Suppliers and Technicians: ",
		REGULATION_VII_2_CONTENT_1: " a. Procedure to become a Technician/service provider (as described above):",
		REGULATION_VII_2_CONTENT_2: " Step 1: Agree to Glow's terms and policies.",
		REGULATION_VII_2_CONTENT_3: " Step 2: Create an account.",
		REGULATION_VII_2_CONTENT_4: " Step 3: The administration provides an account to the Technician.",
		REGULATION_VII_2_CONTENT_5: " b. Regulations for Suppliers/Technicians:",
		REGULATION_VII_2_CONTENT_6:
			" Technicians must provide complete information: Name, address, phone number, email, contact information on the Glow platform.",
		REGULATION_VII_3:
			" 3. Process of Cooperation with Intellectual Property Rights Holders to Review and Remove Infringing Information on the Platform ",
		REGULATION_VII_3_CONTENT_1:
			" Step 1: Receive information about intellectual property infringement on the Platform.",
		REGULATION_VII_3_CONTENT_2: " Step 2: Check and review the information.",
		REGULATION_VII_3_CONTENT_3:
			" Step 3: Confirm whether the reported intellectual property infringement is valid or not.",
		REGULATION_VII_3_CONTENT_4: " Step 4: Propose solutions for resolution, removal if necessary.",
		REGULATION_VII_3_CONTENT_5:
			" Furthermore, the requesting party must provide documents proving intellectual property rights (documents, confirmations from relevant authorities like the Intellectual Property Office).",
		REGULATION_VII_4: " 4. Sanctions for Violations against Customers and Technicians:",
		REGULATION_VII_4_CONTENT_1:
			" For Users: First reminder for violations of user behavior (providing fake addresses, bombarding orders, canceling orders multiple times, etc.). The Platform's management may restrict the user's account for other transactions, and other sanctions as defined by the Platform's management.",
		REGULATION_VII_4_CONTENT_2:
			" For Technicians: Posting service information that violates the Platform's rules (as mentioned above): First reminder. Second reminder results in restricted service provision. Technicians with repeated violations will have their accounts permanently blocked, and their Partner status and privileges revoked.",
		REGULATION_VII_4_CONTENT_3:
			" Resolution of disputes and measures for dealing with actions that infringe on user rights (customer service users):",
		REGULATION_VII_4_CONTENT_4:
			"  - Step 1: Customers complain about the service of the Technician via email: binh.do@glowvietnam.com. Customers can also report directly to the administration of BK VIETNAM TECHNOLOGY JOINT STOCK COMPANY.",
		REGULATION_VII_4_CONTENT_5:
			"- Step 2: Glow's Customer Care Department will receive complaints from customers (users). Depending on the nature and severity of the complaint, Glow will take specific measures to support customers (users) in resolving the dispute.",
		REGULATION_VII_4_CONTENT_6:
			" - Step 3: If the matter is beyond the capability and jurisdiction of Glow, the Administration will request that the customer (user) submit the case to the relevant state agency for resolution according to the law",
		REGULATION_VII_4_CONTENT_7: " Customers can send complaints to the following address:",
		REGULATION_VII_4_CONTENT_8: " BK VIETNAM TECHNOLOGY JOINT STOCK COMPANY",
		REGULATION_VII_4_CONTENT_9:
			" Address: Floor 14, No. 169 Nguyen Ngoc Vu, Trung Hoa Ward, Cau Giay District, Hanoi, Vietnam",
		REGULATION_VII_4_CONTENT_10: " Tel: 0888129100",
		REGULATION_VII_4_CONTENT_11: " Email: binh.do@glowvietnam.com",
		REGULATION_VII_4_CONTENT_12: " Complaint, Warning, Dispute Regulations",
		REGULATION_VII_4_CONTENT_13: " - All posts must meet the following conditions, otherwise they will be blocked:",
		REGULATION_VII_4_CONTENT_14: " + The subject of the complaint is a Glow user.",
		REGULATION_VII_4_CONTENT_15: "  + The incident must be related to the user's post on Glow.",
		REGULATION_VII_4_CONTENT_16: "  + Specific evidence must be provided.",
		REGULATION_VII_4_CONTENT_17: "  + No offensive, vulgar, or threatening language is allowed. ",
		REGULATION_VII_4_CONTENT_18: " - Complaints must provide specific and clear evidence, along with:  ",
		REGULATION_VII_4_CONTENT_19: " + Account of the complainant.",
		REGULATION_VII_4_CONTENT_20: " + Relevant supporting evidence links",
		REGULATION_VII_4_CONTENT_21:
			" Glow respects and diligently adheres to legal regulations regarding the protection of customer rights (users). Therefore, service providers posting on the platform are required to provide complete, accurate, truthful, and detailed information related to the service. Any fraudulent or deceptive business practices will be condemned and held fully accountable under the law.",
		REGULATION_VII_4_CONTENT_22:
			" Technicians and customers have a responsible role in actively resolving issues. Technicians, when involved in disputes, need to provide written documents authenticating information related to the conflicting issue that affects the customer. Glow is responsible for providing information related to customers and Technicians if requested by customers or parties involved in the dispute.",
		REGULATION_VII_4_CONTENT_23:
			" After Technicians and customers have resolved the dispute, they must inform the Glow administration. In cases where a transaction conflict arises due to the Technician's fault, Glow will take warnings, account suspensions, or transfer the case to the relevant legal authority based on the severity of the violation. Glow will terminate and remove all services provided by the Technician on Glow and request the Technician to compensate the customer fairly based on an agreement with the customer.",
		REGULATION_VII_4_CONTENT_24:
			" If disputes cannot be resolved through agreement and arise from transactions between the customer and the Technician, either the customer or the Technician has the right to seek intervention from the competent legal authority to ensure the legitimate interests of all parties, especially the customer.",
		REGULATION_VIII: " VIII. Responsibility in Case of Technical Errors ",
		REGULATION_VIII_CONTENT_1:
			" The Glow E-commerce Platform is committed to ensuring the safety and stability of the entire technical system. However, in the event of incidents caused by Glow's errors, Glow will immediately implement measures to safeguard the rights of users.",
		REGULATION_VIII_CONTENT_2:
			" When conducting transactions on the Platform, users are required to adhere to the provided procedures.",
		REGULATION_VIII_CONTENT_3:
			" The Management of the Glow E-commerce Platform commits to providing the best quality service for users participating in transactions. In the event of technical errors, software malfunctions, or other objective errors that prevent users from participating in transactions, users should inform the Management of the Glow E-commerce Platform through the provided email address. We will rectify the error as soon as possible, enabling users to engage in transactions on the Glow E-commerce Platform.",
		REGULATION_VIII_CONTENT_4:
			" However, the Management of the Glow E-commerce Platform will not be responsible for resolving issues that arise from technical errors, connectivity issues, software malfunctions, or other types of errors not caused by the Management.",
		REGULATION_IX: " IX. Rights and Responsibilities of Glow E-commerce Platform Management ",
		REGULATION_IX_1: " 1. Rights of the Glow E-commerce Platform Management ",
		REGULATION_IX_1_CONTENT_1:
			" - The Glow E-commerce Platform will provide services to users who have completed the required procedures and conditions set forth by the Platform.",
		REGULATION_IX_1_CONTENT_2:
			" - In the event that there is evidence demonstrating that a user has provided inaccurate, incomplete, or law-violating information to the Glow E-commerce Platform, the Platform reserves the right to refuse, suspend, or terminate the user's service usage.",
		REGULATION_IX_1_CONTENT_3:
			" - The Glow E-commerce Platform may terminate a user's rights and usage of one or all services, and will notify the user with a notice period of at least one (01) month, if the user violates the Regulations of the Glow E-commerce Platform or engages in activities that affect business operations on the Glow E-commerce Platform.",
		REGULATION_IX_1_CONTENT_4:
			" - The Glow E-commerce Platform will review the termination of a user's service usage and rights if the user does not engage in trading activities or continuously exchange information on the Glow E-commerce Platform for three (03) months. To continue as a user and regain service usage rights, the user must re-register from the beginning following the template and procedures of the Glow E-commerce Platform.",
		REGULATION_IX_1_CONTENT_5:
			" - The Glow E-commerce Platform may immediately terminate a user's service usage and rights if the Platform discovers that the user has gone bankrupt, has been convicted, is serving a sentence, continues activities that may impose legal liability on the Platform, engages in fraudulent activities, impersonation, market disruption, undermines cohesion with other users of the Glow E-commerce Platform, or engages in activities that violate the current laws of Vietnam. Upon termination of user rights and service usage rights, all certificates and granted user rights will automatically expire and be revoked.",
		REGULATION_IX_1_CONTENT_6:
			" - The Glow E-commerce Platform holds the copyright to use services and content on the Glow E-commerce Platform in accordance with the laws on intellectual property protection in Vietnam. All symbols and content in various languages are the property of the Glow E-commerce Platform. Copying, using, and unlawfully disseminating any ownership rights is strictly prohibited.",
		REGULATION_IX_1_CONTENT_7:
			" - The Glow E-commerce Platform reserves the right to change the service price list, rates, and payment methods during the provision of services to users based on the needs and capabilities of the Glow E-commerce Platform, and will provide advance notice of one (01) month to users.",
		REGULATION_IX_2: " 2. Duties and Responsibilities of the Glow E-commerce Platform Management ",
		REGULATION_IX_2_CONTENT_1:
			" - The Glow E-commerce Platform is responsible for establishing and implementing a 'verification and monitoring mechanism to ensure the accuracy and completeness of information provided by Service Providers on the e-commerce trading platform,' as specified in Article 36, Clause 4 of Decree 52/2013/ND-CP.",
		REGULATION_IX_2_CONTENT_2:
			" - The Glow E-commerce Platform is responsible for promptly addressing issues when detecting or receiving reports of business activities violating the law on the e-commerce trading platform.",
		REGULATION_IX_2_CONTENT_3:
			" - The Glow E-commerce Platform is responsible for supporting state management agencies in investigating business activities that violate the law, providing registration information, transaction history, and other documents related to entities engaging in law-violating activities on the e-commerce trading platform.",
		REGULATION_IX_2_CONTENT_4:
			" - The Glow E-commerce Platform is responsible for publicly disclosing the dispute resolution mechanism that arises during transactions on the e-commerce trading platform. When disputes arise between customers and Service Providers on the e-commerce trading platform or legitimate interests are harmed, information about the Service Provider must be provided to the customer, actively assisting the customer in protecting their legitimate rights and interests.",
		REGULATION_IX_2_CONTENT_5:
			" - The Platform Management will strive to remove inaccurate information to the highest extent.",
		REGULATION_IX_2_CONTENT_6:
			" - The management is obligated to receive feedback from users, buying customers, and selling customers.",
		REGULATION_IX_2_CONTENT_7:
			" - The Glow E-commerce Platform is responsible for building and supplementing a system of knowledge and information about: foreign trade practices, e-commerce, domestic and international commercial legal text systems, foreign markets, as well as relevant news related to the activities of the Glow E-commerce Platform.",
		REGULATION_IX_2_CONTENT_8:
			" - The Glow E-commerce Platform will conduct promotional activities to introduce the Glow E-commerce Platform to foreign markets within the allowable scope and conditions, contributing to expanding, connecting, and fulfilling the needs of seeking business partners and developing the overseas market for users participating in the Glow E-commerce Platform.",
		REGULATION_IX_2_CONTENT_9:
			" - The Glow E-commerce Platform will make every effort within the possible scope and conditions to maintain the normal operation of the Glow E-commerce Platform",
		REGULATION_IX_2_CONTENT_10:
			" - To address incidents such as technical failures of machinery, software errors, Internet connection systems, personnel, social fluctuations, natural disasters, power outages, decisions of state agencies, or related third-party organizations.",
		REGULATION_IX_2_CONTENT_11:
			" - However, if these incidents are beyond control and fall under force majeure, causing damage to users, the Glow E-commerce Platform shall not bear joint liability.",
		REGULATION_X: " X. Rights and Responsibilities of Parties Participating in Glow E-commerce Trading Platform ",
		REGULATION_X_1:
			" 1.1. Rights and Responsibilities of Partners (Technicians, Suppliers) Using the Glow Application",
		REGULATION_X_1_CONTENT_1: " a. Rights of Technicians on the Glow E-commerce Trading Platform",
		REGULATION_X_1_CONTENT_2:
			"  Technicians will be provided with a unique username and password to access and manage transactions on Glow.",
		REGULATION_X_1_CONTENT_3:
			" - Technicians will receive guidance from the staff of the Glow E-commerce Trading Platform on using tools, features for purchasing or posting classified ads, and using utility services on the Glow E-commerce Trading Platform",
		REGULATION_X_1_CONTENT_4:
			" - Technicians have the right to provide opinions to the Glow E-commerce Trading Platform during its operation. Suggestions can be sent directly via mail or email to the Glow E-commerce Trading Platform.",
		REGULATION_X_1_CONTENT_5:
			" b. Obligations and Responsibilities of Technicians on the Glow E-commerce Trading Platform",
		REGULATION_X_1_CONTENT_6:
			"  - Technicians are responsible for the security and preservation of all activities using their registered username, login, password, and email.",
		REGULATION_X_1_CONTENT_7:
			" - Technicians are responsible for promptly notifying the Glow E-commerce Trading Platform of any unauthorized, abusive, security-violating use, or the preservation of their registration and password, for both parties to cooperate in handling.",
		REGULATION_X_1_CONTENT_8:
			" - Technicians commit that the information provided to the Glow E-commerce Trading Platform and the information posted on the platform is accurate.",
		REGULATION_X_1_CONTENT_9:
			"  - Technicians are responsible for the content, images of Personal Information, and other information, as well as the entire transaction process with partners on the Glow E-commerce Trading Platform.",
		REGULATION_X_1_CONTENT_10:
			" - Technicians are responsible for providing information about support transactions to the Glow E-commerce Trading Platform in resolving disputes arising between customers and sellers on the Platform.",
		REGULATION_X_1_CONTENT_11:
			" - Technicians are responsible for compensating damages for customers that can prove that the error belongs to the Technician.",
		REGULATION_X_1_CONTENT_12:
			" - Technicians commit and agree not to use the services of the Glow E-commerce Trading Platform for illegal, fraudulent, threatening, illegal information gathering, sabotage, creating and distributing viruses that damage the system, configuration, transmission of information of the Glow E-commerce Trading Platform, or using their services for speculative purposes, market manipulation, creating fake orders, fake offers, including serving market demand predictions. In case of violation, users are responsible for their actions under the law.",
		REGULATION_X_1_CONTENT_13:
			" - Technicians commit not to modify, alter, copy, transmit, distribute, provide, and create similar tools of the services provided by the Glow E-commerce Trading Platform to a third party without the consent of the Glow E-commerce Trading Platform in this Regulation.",
		REGULATION_X_1_CONTENT_14:
			" - Technicians must not engage in actions that undermine the reputation of the Glow E-commerce Trading Platform in any form, such as undermining unity among users by using a secondary registered name, through a third-party registered name, or propagating information detrimental to the reputation of the Glow E-commerce Trading Platform.",
		REGULATION_X_1_CONTENT_15:
			" - Technicians have the obligation to provide information about their business situation when requested by authorized state agencies to serve electronic commerce statistics; comply with regulations on payment, advertising, promotion, intellectual property protection, consumer protection, and other related regulations when providing services on the e-commerce trading platform.",
		REGULATION_X_1_CONTENT_16:
			" - Technicians and Customers must be responsible according to the regulations of Vietnamese law when engaging in sensitive, provocative acts, and acts that violate the law. The Glow E-commerce Trading Platform is exempt from liability for the actions of Customers towards Technicians; Technicians towards Customers. In case of litigation, disputes, customers, and partners will work directly with each other, and the Glow E-commerce Trading Platform will provide necessary information when requested by the competent authority.",
		REGULATION_X_2: " 1.2. Rights and Responsibilities of Users (Individuals, Service Users) on Glow ",
		REGULATION_X_2_CONTENT_0: " a. Rights of Customers Participating in the Glow E-commerce Trading Platform ",
		REGULATION_X_2_CONTENT_1:
			" - Upon registering as Users, customers will create an account to enjoy the benefits within the Glow system. ",
		REGULATION_X_2_CONTENT_2:
			" - Customers will be provided with a unique registration username and password to use services, manage accounts, and the usage history of their benefits within the Glow system. ",
		REGULATION_X_2_CONTENT_3:
			" - Customers may enjoy preferential policies provided by the Glow E-commerce Trading Platform or third-party partners on the Glow E-commerce Trading Platform. These preferential policies will be resolved by the Glow E-commerce Trading Platform (if any) and will be directly posted on the Glow E-commerce Trading Platform Application or sent directly to customers. ",
		REGULATION_X_2_CONTENT_4:
			" - Customers have the right to contribute opinions to the Glow E-commerce Trading Platform during its operation. Suggestions can be sent directly via mail or email to the Glow Application.",
		REGULATION_X_2_CONTENT_5:
			" - Customers have the right to send direct complaints and compensation requests to Glow in case the services provided by the Technician do not meet the promised quality.",
		REGULATION_X_2_CONTENT_6:
			" b.Responsibilities of Customers Participating in the Glow E-commerce Trading Platform",
		REGULATION_X_2_CONTENT_7:
			"- Customers will be responsible for the security, preservation, and all activities using the service under their registered username, password, and email.",
		REGULATION_X_2_CONTENT_8:
			"- Customers and Technicians must be responsible according to the regulations of Vietnamese law when engaging in sensitive, provocative acts, and acts that violate the law. The Glow E-commerce Trading Platform is exempt from liability for the actions of Customers towards Technicians; Technicians towards Customers. In case of litigation, disputes, customers, and Technicians will work directly with each other, and the Glow E-commerce Trading Platform will provide necessary information when requested by the competent authority.",
		REGULATION_X_2_CONTENT_9:
			"- Customers are responsible for promptly notifying the Glow Application of any unauthorized, abusive, security-violating use, or the preservation of their registered username and password for both parties to cooperate in handling.",
		REGULATION_X_2_CONTENT_10:
			"- Customers commit that the information provided to the Glow E-commerce Trading Platform and the information they upload to the Glow E-commerce Trading Platform is accurate.",
		REGULATION_X_2_CONTENT_11:
			"- Customers are responsible for providing information about support transactions to the Glow E-commerce Trading Platform in resolving disputes arising between Customers and Technicians on the Platform.",
		REGULATION_X_2_CONTENT_12:
			"- Customers commit and agree not to use the services of the Glow E-commerce Trading Platform for illegal, unreasonable, fraudulent, threatening, illegal information gathering, sabotage, creating and distributing viruses that damage the system, configuration, transmission of information of the Glow E-commerce Trading Platform, or using their services for speculative purposes, market manipulation, creating fake orders, fake offers, including serving market demand predictions. In case of violation, users are responsible for their actions under the law.",
		REGULATION_X_2_CONTENT_13:
			"- Customers commit not to modify, alter, copy, transmit, distribute, provide, and create similar tools of the services provided by the Glow E-commerce Trading Platform to a third party without the consent of the Glow E-commerce Trading Platform in this Regulation.",
		REGULATION_X_2_CONTENT_14:
			"- Customers must not engage in actions that undermine the reputation of the Glow E-commerce Trading Platform in any form, such as undermining unity among users by using a secondary registered name, through a third-party registered name, or propagating information detrimental to the reputation of the Glow E-commerce Trading Platform.",
		REGULATION_XI: " XI. Applicable Provisions ",
		REGULATION_XI_CONTENT_1:
			" The regulations of the Glow E-commerce Trading Platform officially take effect upon the date of signing the Decision issued with this Regulation. The Glow E-commerce Trading Platform has the right and may change this Regulation by notifying users on the Glow E-commerce Trading Platform. The continued use of the service by users after the amended Regulation is published and enforced implies that users have accepted these amended terms.",
		REGULATION_XI_CONTENT_2:
			" The operational regulations will be continuously updated and announced by Glow before implementation. The regulations will take effect 5 working days after the notice of change. Users participating in Glow are responsible for adhering to the current regulations when trading on the website.",
		REGULATION_XII: " XII. Commitment Clause ",
		REGULATION_XII_CONTENT_1:
			" Any users and partners/Technicians using Glow for online trading imply that the related parties have agreed to comply with this Regulation. For any customer inquiries, please contact Glow using the information below for assistance.",
		REGULATION_XII_CONTENT_2: "  Customer Support",
		REGULATION_XII_CONTENT_3: " Glow E-commerce Trading Platform",
		REGULATION_XII_CONTENT_4:
			" • Address: 14th Floor, 169 Nguyen Ngoc Vu, Trung Hoa Ward, Cau Giay District, Hanoi City, Vietnam",
		REGULATION_XII_CONTENT_5: " • • Phone: 0888129100",
		REGULATION_XII_CONTENT_6: " Email: binh.do@glowvietnam.com",
		REGULATION_XII_CONTENT_7: " Company Representative (signature, seal)",

		HOME_PAGEV2_TITLE: "Glow - On-demand services booking platform",
		HOME_PAGEV2_SERVICE: "How to book at home:",
		HOME_PAGEV2_SERVICE_CONTEN_1: 'Step 1: Select the "Spa at home" category',
		HOME_PAGEV2_SERVICE_CONTEN_2: "Step 2: Choose a therapist",
		HOME_PAGEV2_SERVICE_CONTEN_3: "Step 3: Therapist will come to perform the service at your home",
		HOME_PAGEV2_SERVICE_CONTEN_4: "",
		HOME_PAGEV2_SERVICE_CONTEN_5: "",
		HOME_PAGEV2_SERVICE_CONTEN_6: "",
		HOME_PAGEV2_SERVICE_CONTEN_7: "",
		HOME_PAGEV2__SPA_3STEP: "Booking a Spa appointment:",
		HOME_PAGEV2__SPA_3STEP_CONTENT_1: "Step 1: Check out nearby Spas offering deep discounts.",
		HOME_PAGEV2__SPA_3STEP_CONTENT_2: "Step 2: Select a Spa and the suitable service.",
		HOME_PAGEV2__SPA_3STEP_CONTENT_3: "Step 3: Head to the Spa and enjoy the service.",
		HOME_PAGEV2_TL: "Book at-home services",
		HOME_PAGEV2_TL_CT: "Massage, makeup, nail, wax, driver, assistant, housekeeper",
		HOME_PAGEV2_GC: "Find reputable locations",
		HOME_PAGEV2_GC_CT: "Spa, beauty clinic, clinic",
		HOME_PAGEV2_CL: "Quality assurance",
		HOME_PAGEV2_CL_CT: "Transparent reviews, clearly verified certificates",
		HOME_PAGEV2_DOWNLOAD: "Download app",

		HOME_PAGEV2_FOOTER: "Glow - On-demand services booking platform",

		HOME_PAGE_IMAGE_PHONE: "./static/img/TrangchuwebsiteEN.jpg",

		ALT_MENU_LOGO: "Glow logo",
		ALT_MENU_LOGO_RES: "English language option in Glow",
		ALT_IMG_BCT: "Glow has been registered by the Ministry of Industry and Trade",
		ALT_GLOW_FAGE_FACE: "Glow facebook fanpage",
		ALT_GLOW_FAGE_INSTA: "Glow instagram fanpage",
		ALT_GLOW_FAGE_TIKTOK: "Glow's tiktok channel",
		ALT_GLOW_FAGE_LINK: "Glow's LinkedIn channel",
		ALT_GLOW_FAGE_YOUTUBE: "Glow's youtube channel",
		ALT_GLOW_FAGE_TWITTER: "Glow's twitter channel",
		ALT_GLOW_FAGE_ZALO: "Glow's zalo channel",
		ALT_GLOW_FAGE_KKT: "Glow's kakaotask channel",
		ALT_GLOW_FAGE_LINE: "Glow's line channel",
		ALT_GLOW_HOME_PAGE: "Home page of Glow massage application at home",
		ALT_GLOW_BOOK_HOME: "Steps to book a massage at home on the Glow app",
		ALT_GLOW_BOOK_APP: "Steps to book a Spa appointment on the Glow app",
		ALT_GLOW_TL: "Glow brings convenience to customers",
		ALT_GLOW_RR: "Prices are clear on the Glow app",
		ALT_GLOW_DG: "Quality is clearly assessed on the Glow application",
		ALT_GLOW_DOWNLOAD_GLOW_STORE: "Link to download the Glow app on the App Store",
		ALT_GLOW_DOWNLOAD_GLOW_GG_PLAY: "Link to download the Glow app on Google Play",
		ALT_GLOW_DOWNLOAD_GLOW_RES: "Links to download the Glow app on Google Play and Apple Store",

		ALT_IMG_ABOUT_1: "Massage at home on the Glow app",
		ALT_IMG_ABOUT_2: "Makeup at home on the Glow app",
		ALT_IMG_ABOUT_3: "Do nails at home on the Glow app",

		ALT_IMG_PARTNER_1: "Glow's home massage technician",
		ALT_IMG_PARTNER_2: "Materials that Glow encourages partners and technicians to use when massaging at home",
		ALT_IMG_PARTNER_3:
			'Image of the Glow app homepage, including the “Become a Partner" button for instructions on how to register as a Glow Partner',

		ALT_IMG_PARTNER_DL_IOS_QR: "QR code to download the Glow application on the App Store",
		ALT_IMG_PARTNER_DL_ADR_QR: "QR code to download the Glow application on Google Play",
		ALT_IMG_PARTNER_DL_IOS: "Link to download the Glow app on the App Store",
		ALT_IMG_PARTNER_DL_ADR: "Link to download the Glow app on Google Play",

		ALT_IMG_BANNER_BLOG: "Glow's blog is used to share health care and beauty knowledge",
		MASSAGE_AT_HOME: "Massage at home",
		MASSAGE_LOCATION: "Massage Locations",
		HEADER_SPA_AT_HOME: "At home services",
		SEE_ALL: "See all",
		FILTERS: "Filters",
		FILTERS_CITY: "City",
		FILTERS_GENDER: "Gender",
		FILTERS_PRICE: "Price",
		FILTERS_REVIEWS: "Reviews",
		DESCRIPTION: "Description",

		DEAL_HOT: "⚡ Hot Deal",
		ALL: "All",
		BOOK_NOW: "Book now",
		DISTRICT: "District",
		MALE: "Male",
		FEMALE: "Female",
		UNDER300000: "Under 300.000đ",
		ABOVE1000000: "Above 1.000.000đ",

		FILTERS_BY_DISTRICT: "Filter by district",
		FILTERS_BY_CITY: "Filter by province",
		FILTERS_BY_GENDER: "Filter by gender",
		FILTERS_BY_PRICE: "Filter by rating",
		FILTERS_BY_REVIEWS: "Filter by price",

		NO_PARTNERS_AVAILABLE_YET: "No Partners Available Yet",
		AT_HOME: "At home",
		DEAL_HOT_V2: "Hot Deal",
		WARD: "Ward",

		NEW_PAGE_CASHBACK: "Cashback",
		NEW_PAGE_COLLECT_VOUCHER: "Collect voucher",
		NEW_PAGE_TAP_TO_RATE: "Tap to rate",
		NEW_PAGE_NO_REVIEWS: "No reviews ",
		NEW_PAGE_SERVICE_DESCRIPTION: "Service description",
		NEW_PAGE_PRESSING_COLLECT_VOUCHER: 'After pressing "Collect voucher", you will receive a Voucher code.',
		NEW_PAGE_EXPIRATION_DATE: "Expiration date",
		NEW_PAGE_REFUND_GLOW_BALANCE: "After using the service, you will be refunded by Glow into your Glow balance.",
		NEW_PAGE_CUSTOMER_REVIEWS: "Customer reviews",
		FILTERS_BY_WARD: "Filter by Ward / Commune",
		NEW_PAGE_SEE_MORE: "See more",
		NEW_PAGE_GLOW_WILL_CASHBACK: "Glow will cashback",

		FOOTER_CONTENT_SEO:
			"Glow is a fantastic platform for you to book massage, spa, beauty, and health care services with the best deals all over Vietnam! Explore discounted offers from over 5,000 top spas, beauty salons, and clinics nationwide, along with cashback rewards after every deal received through the Glow app!",
		FOOTER_CONTENT_SEO2: "Glow brings you a unique home service experience.",
		FOOTER_CONTENT_SEO3:
			"Home massages, anytime, anywhere! Glow offers home massage services with just a 5-minute booking, available in Hanoi, Ho Chi Minh City, and Da Nang. Not only home massages, but Glow also offers a variety of services such as earwax removal, makeup, nail care, hair removal, and more at home. Enjoy relaxation right in the comfort of your beloved home after a long day of work.",
		FOOTER_CONTENT_SEO4: "Earn commissions with Glow's referral program.",
		FOOTER_CONTENT_SEO5:
			"Referrers share invite codes with friends, earning a 50% commission whenever the referee uses services on the Glow app. Simply share on the Glow app and receive a lifetime 50% commission even while you sleep.",
		FOOTER_CONTENT_SEO6: "Install the Glow app now!",
		FOOTER_CONTENT_SEO7:
			"Discover the magic of Glow - the platform for booking massages, spas, and beauty clinics with exclusive deals trusted by over 10,000 Glow users on iOS and Android! Immerse yourself in relaxation with top spas and beauty clinics. Glow offers home massage services where you can enjoy exciting massages right at your home whenever you want. Glow's professional home massage therapists are just a tap away, ready to serve you with just a 5-minute booking in Hanoi, Ho Chi Minh City, and Da Nang.",
		FOOTER_CONTENT_SEO8: `You'll feel comfortable exploring safe and affordable deals on Glow, providing all services from massages, spas, beauty clinics, healthcare, and more. Easily find nearby establishments on the Glow app with the convenient "Near Me" feature and book appointments effortlessly, 24/7. Don't miss out on daily massive discounts and exclusive Glow discounts for new users. Join Glow today and discover an experience like no other!`,

		LOGIN_SUPPORT: "Support",
		LOGIN_ORDER: "My order",
		LOGIN_LOG_OUT: "Log out",
		LOGIN_LOG_IN: "Login",
		LOGIN_LOG_IN_RESGISTER: "Login / Register",
		LOGIN_ADD_IMAGE: "Add image",
		LOGIN_SELECT_SERVICE: "Select service",
		LOGIN_REVIEW_SUCCESS: "You have successfully submitted your review",
		LOGIN_SUCCESS_VOUCHER: "Successfully received voucher",
		LOGIN_YOUR_WILL_CASHBACK: "You will be cashbacked by Glow",
		LOGIN_VOUCHER_DETAIL: "Voucher details",
		LOGIN_VIEW_VOUCHER_DETAIL: "View voucher details",
		LOGIN_READ_REVIEW: "Write a review",
		LOGIN_CONFIRME: "Confirmed",
		LOGIN_PLEAL_CONTACT: "Please contact the shop to make an appointment before coming",
		LOGIN_VOUCHER_CODE: "Voucher code",
		LOGIN_CODE_GLOW_CASHBACK: "You provide the code to the shop to be scanned for Glow cashback of 😊",
		LOGIN_ENTER_SDT:
			"Enter your phone number and password used for login or create an account if you are using Glow for the first time",
		LOGIN_YOUR_PHONE_NUMBER: "Type your phone number",
		LOGIN_FORGOT_PASSWORD: "Forgot Password",
		LOGIN_CONTINUE: "Continue",
		LOGIN_ENTER_YOUR_PASSWORD: "Enter your password",
		LOGIN_SDT_LOGIN: "Phone number",
		LOGIN_ENTER_PASSWORD: "Enter password",
		LOGIN_OTP_SDT: "OTP confirmation code has been sent to the phone number",
		LOGIN_VERIFICATION_SDT: "Phone number verification successful",
		LOGIN_RE_SEND_SMS: "Resend SMS",
		LOGIN_PASSWORD_SIX: "Enter a password with at least 6 characters",
		LOGIN_CREATED_PASSWORD: "Create password",
		LOGIN_REGISTER_SUCCESS: "Account registration successful",
		LOGIN_INFO: "Personal information",
		LOGIN_HELP_GLOW: "Help Glow understand more about you!",
		LOGIN_SELECT_GENDER: "Choose gender",
		LOGIN_COUNTRY: "Nationality",
		LOGIN_SAVE: "Save",
		LOGIN_INFO_CALL: "Contact Information",
		LOGIN_ONLY: "only",
		LOGIN_ENTER_REVIEW: "Enter review",
		LOGIN_VOUCHER: "Voucher",
		LOGIN_USED: "Used",
		LOGIN_EXPIRED: "Expired",

		SUGGESTIONS: "Suggestions for you",
		GLOW_NO_1: "Glow - Vietnam's No. 1 Home Massage Booking App",
		GLOW_NO_1_BACKGROUND: "./static/img/TainhawebsiteEN.png",

		YOUR_PHONE_NUMBER: "What is your phone number?",
		PHONE_NUMBER_TO_LOG_OR_SIGN_UP: "Phone number used to log in or sign up on Glow for the first time.",
		APARTMENT: "Apartment / Building",
		DOWNLOAD_GLOW_APP_APPOINTMENT: "Download Glow App now to book an appointment",

		AGREE_LAW: "By logging into the app, you agree to our Operating Regulations, Terms, and Policies",
		TITLE_PAGE_HOME_NEW_SERVICE: "Spa, Beauty Vouchers",
		LOCATION: "Location",
		SPA_BEAUTY_CLINIC: "Spa, Beauty Clinic, Clinic",
		DETAILS: "Details",
		CONTACT_PHONE_NUMBER: "Contact for advise and booking:",
		LIST_OF_THERAPISTS: "List of therapists",
		DOWNLOAD_SEE_MORE_OFFERS: "Download the Glow App to see more offers",
		THERAPISTS: "Therapists",
		THERAPISTS_NEAR_ME: "Therapists near me",
		SEARCH_RESULTS: "Search results:",
		NO_DATA: "No information available",
		NO_RESULTS: "No results found",
		SEARCH: "Search",
		MENU_APP_DOWNLOAD_BUTTON: "Use App",
		MENU_APP_DOWNLOAD_TITLE: "Glow - Massage at home",
		MENU_APP_DOWNLOAD_CONTENT: "The easiest way to book",
		SERVICE_DES: "Service description",
	},
	kr: {
		HOME_PAGE: "홈페이지",
		ABOUT_GLOW: "글로우 소개",
		HOME_PAGE_GLOW_PARTNER: "글로우 파트너 되기",
		HOME_PAGE_GLOW_BLOG: "블로그",

		HOME_TITLE_1: "집에서 편안한 미용 체험",
		HOME_TITLE_2:
			"독점적인 스파와 미용 서비스를 집에서 제공하는 장소입니다. 여러분을 위해 맞춤으로 제공되며, 집을 떠나지 않고도 휴식을 취하고 아름다움을 높이는 데 도움을 드립니다.",
		HOME_DOWNLOAD: " 앱 다운로드 ",
		HOME_GLOW_PARTNER: "Glow 파트너 되기",

		HONE_INSTRAC_TITLE_TOP: "경험해보는 3단계",
		HONE_INSTRAC_TITLE_BOTTOM: "간편하고 편리하며 몇 번의 클릭만으로",
		HONE_INSTRAC_TITLE_1: "파트너와 일정 조율",
		HONE_INSTRAC_TITLE_2: "연결 대기",
		HONE_INSTRAC_TITLE_3: "약속 장소에서 파트너를 만나보세요",
		HONE_INSTRAC_CONTENT_1:
			"Glow 웹사이트나 모바일 앱을 방문하여 패키지를 선택하고 적합한 시간을 몇 번의 간단한 터치로 예약하세요.",
		HONE_INSTRAC_CONTENT_2:
			"성공적인 예약 이후, Glow는 당신의 지역에서 경험있고 열정적인 미용 전문가와 연결해 드립니다.",
		HONE_INSTRAC_CONTENT_3:
			"Glow의 전문가들은 현대적인 장비와 고품질 제품을 가지고 집으로 찾아와서, 프라이빗한 공간에서 여유롭고 자연스러운 미용 경험을 제공해 드립니다.",

		HOME_SERVICE_TITLE: "Glow에서 제공하는 서비스",
		HOME_SERVICE_TITLE_1: "Massage",
		HOME_SERVICE_TITLE_2: "Nail",
		HOME_SERVICE_TITLE_3: "Makeup",
		HOME_SERVICE_TITLE_4: "Hairstylist",
		HOME_SERVICE_CONTENT_1: "집에서의 건강과 휴식",
		HOME_SERVICE_CONTENT_2: "당신의 취향에 맞는 아름다운 네일 세트 소유",
		HOME_SERVICE_CONTENT_3: "어디를 가든 아름다움이 돋보이게",
		HOME_SERVICE_CONTENT_4: "행사나 메이크업과 어울리는 헤어 스타일링",

		HOME_DOWNLOAD_TITLE: "Glow 앱 다운로드",
		HOME_DOWNLOAD_CONTENT:
			"집에서 맞춤형 스파와 미용 서비스를 제공하는 곳. 우리가 도와드립니다, 집을 나가지 않아도 휴식을 취하고 아름다움을 높일 수 있도록.",
		HOME_DOWNLOAD_IMG: "./static/img/bannerdkKR.png",

		HOME_INTRODUCE_TITLE_1: "당신을 위해 집에서 건강과 미용 서비스를 제공",
		HOME_INTRODUCE_TITLE_1_CONTENT_1: "편리성: 다양한 미용 및 스파 서비스, 집 약속, 언제 어디서든",
		HOME_INTRODUCE_TITLE_1_CONTENT_2: "가격: 투명하고 명확하며 추가 비용 없이 제공",
		HOME_INTRODUCE_TITLE_1_CONTENT_3:
			"품질: Glow 파트너는 전문성과 윤리에 대해 신중하게 선택되며 심사되며 포괄적으로 훈련받았습니다.",
		HOME_INTRODUCE_TITLE_2: "모두에게 수입 기회를 만들어 줍니다",
		HOME_INTRODUCE_TITLE_2_CONTENT_1: "안정적인 고객 유입을 통해 수입 증가",
		HOME_INTRODUCE_TITLE_2_CONTENT_2: "고급 교육과 기술 개발을 통해 파트너가 개인 브랜드를 구축하는 데 도움",
		HOME_INTRODUCE_TITLE_2_CONTENT_3:
			"Glow는 파트너들의 경력 발전을 돕기 위해 함께 하며 스파 비즈니스 운영에 대한 지도도 제공",
		HOME_INTRODUCE_PARTNER: "Glow 파트너가 되기 위해 등록하세요",

		FOOTER_TITLE: "당신을 위한 집에서의 건강과 미용 서비스 제공",
		FOOTER_LINK: "링크",
		FOOTER_HOME_PAGE: "홈 페이지",
		FOOTER_ABOUT_GLOW: "글로우 소개",
		FOOTER_GLOW_PARTNER: "Glow 파트너 되기",
		FOOTER_PRIVACY_POLICY: "개인 정보 처리 방침",
		FOOTER_TERM_SERVICE: "서비스 이용 약관",
		FOOTER_OPERATING_REGULATION: "운영 규정",
		FOOTER_INFOMATION: "정보",
		FOOTER_ADDRESS: "14층, 169 Nguyen Ngoc Vu, Trung Hoa, Cau Giay, Hanoi",
		FOOTER_BUSINESS_NUMBER: "사업 등록 번호",

		ABOUT_TITLE_TOP: "글로우의 이야기",
		ABOUT_TITLE_BOTTOM: "행복과 삶의 즐거움을 위한 웰니스와 뷰티",
		ABOUT_TITLE_1: '"건강을 가지는 것은 모든 것을 가지는 것"',
		ABOUT_CONTENT_1:
			'우리의 노력과 꿈은 특히 2019년에서 2022년까지의 코로나 바이러스 대유행을 겪은 인류에게 있습니다. 대유행 동안의 위기는 우리가 "건강"을 어떻게 인식하고 일상에서 건강을 어떻게 돌보는지를 어느 정도 바꿨습니다.',
		ABOUT_CONTENT_2:
			'현대 생활에서의 "건강"은 육체적 안녕뿐만 아니라 건강한 정신적 생활, 습관, 그리고 자기 자신을 아름답게 꾸미고 돌보는 방식에서 유래합니다. 따라서 집에서 제공되는 마사지 및 미용 서비스와 같은 건강 관련 서비스와의 연결 필요성이 중요해집니다. 그러나 이러한 서비스를 찾는 과정은 지리적 장벽, 시간 제한 및 신뢰성 문제로 인해 어려움에 직면하며, 전문성, 신뢰성 및 편의성에 대한 기준을 충족하는 기술 플랫폼의 등장이 필요합니다.',
		ABOUT_TITLE_2: "2020년,",
		ABOUT_TITLE_2_BOTTOM: "고객들로부터의 집에서 마사지 및 미용 서비스 수요를 이해하기",
		ABOUT_CONTENT_3:
			"Glow 앱은 2020년에 탄생한 것으로, 다양한 전문 의료 전문가 팀을 연결해 드리는 자랑스러운 다리 역할을 수행하고 있습니다. Glow 앱은 건강 조력자 역할을 하며, 근골격 문제를 해결하거나 스트레스 가득한 하루를 마사지 기술로 풀어주는 적절한 기술자를 찾아드리는 데 도움이 될 뿐만 아니라, '뷰티 & 모바일 스파'로서 몇 번의 간단한 터치만으로 집에서 아름다움을 높이는 서비스를 제공합니다.",
		ABOUT_CONTENT_4:
			"Glow 앱이 신뢰받고 인기 있는 이유는 신뢰할 수 있는 동반자로서 고객과 기술자 모두에게 헌신하는 역할뿐만 아니라 지속적인 학습, 발전 및 개선에 대한 약속입니다. 이로써 Glow 앱은 베트남 의료 시장에 긍정적이고 세련된 영향을 끼치며, Glow 앱의 연결 및 협력 양측에 대한 투명성과 혜택을 보장합니다.",
		ABOUT_CONTENT_5:
			"건강이 정원이라면, Glow 앱은 여러분의 건강 정원을 기르는 여정을 동행하는데 기쁨을 느낍니다. 이 정원을 푸르고 빛나는 가능성으로 가득하게 유지하는 역할을 하고 있습니다.",
		ABOUT_CONTENT_6: "행복과 삶의 즐거움을 위한 웰니스와 뷰티!",
		ABOUT_CONTENT_7: "비전",
		ABOUT_CONTENT_8: "베트남에서 가장 큰 헬스케어 및 뷰티 플랫폼이 되고 대륙을 넓혀 나가기.",
		ABOUT_CONTENT_9: "미션",
		ABOUT_CONTENT_10: "모두에게 더 건강하고 아름답고 행복한 삶을 위한 힘을 주는 것",
		ABOUT_CONTENT_11: "핵심 가치",
		ABOUT_CONTENT_12: "연결",
		ABOUT_CONTENT_13: "신뢰",
		ABOUT_CONTENT_14: "이해",
		ABOUT_CONTENT_15: "투명성",
		ABOUT_CONTENT_16: "배려",

		PARTNER_TITLE_TOP: "글로우 파트너 되기",
		PARTNER_TITLE_BOTTOM: "존경하는 파트너 여러분께,",
		PARTNER_CONTENT_1:
			"Glow은 Glow 앱과의 협업에 대해 감사하게 생각합니다. 우리는 당신이 찾고 고객과 연결하길 희망하는 빛나는 다이아몬드 중 하나라고 믿습니다. Glow라는 이름이 나타내듯이 - 빛나는 빛, 우리는 집에서 마사지나 미용 관리와 같은 서비스를 통해 사람들이 편리하게, 안전하게, 그리고 품질 좋게 건강을 돌보도록 목표로 하지만, 또한 Glow의 모든 파트너가 항상 자신의 일에 대한 흥미와 열정을 찾아내며, 긍정적인 영향을 커뮤니티에 전하도록 기대합니다.",
		PARTNER_DOWNLOAD: "앱 다운로드 ",
		PARTNER_TITLE_1: "여러분은 특별하고 합당한 혜택을 받게 됩니다:",
		PARTNER_TITLE_2: "수입",
		PARTNER_CONTENT2: "다양한 고객 유입으로 수입을 늘릴 수 있습니다.",
		PARTNER_TITLE_3: "리뷰",
		PARTNER_CONTENT_3: "Glow 파트너들은 수백만 명의 고객들에 의해 경험하고 평가됩니다.",
		PARTNER_TITLE_4: "개인 브랜드",
		PARTNER_CONTENT_4: "Glow는 파트너들이 자신의 브랜드를 구축하고 수백만 명의 잠재 고객들에게 도달하는 곳입니다.",
		PARTNER_TITLE_RES: "Glow 파트너가 되는 방법",
		PARTNER_TITLE_5: "Glow 파트너가 되는 방법",
		PARTNER_TITLE_DOWNLOAD_1: "QR 코드를 스캔하거나 아이콘을 탭하여 Glow 앱을 다운로드합니다.",
		PARTNER_TITLE_DOWNLOAD_2: "Glow 파트너가 되기를 선택합니다.",
		PARTNER_TITLE_DOWNLOAD_3: "모든 필요한 정보를 기입하고 주문을 받을 준비를 합니다.",
		PARTNER_SRC_IMG: "./static/img/bannerdkKR.png",

		POLICY_TITLE: "서비스 이용 약관",
		POLICY_UPDATE: "최종 업데이트: 2023년 4월 1일",
		POLICY_TITLE_A: "A. 개인정보 수집",
		POLICY_CONTENT_1:
			"개인정보란 이름, 주민등록번호, 출생증명서 번호, 여권 번호, 국적, 주소, 전화번호, 팩스 번호, 은행 정보, 신용카드 정보, 인종, 성별, 생년월일, 결혼 여부, 거주 상태, 교육 배경, 재정 상태, 개인 취향, 이메일 주소, 직업, Glow 내에서의 신원, Glow 내의 정보, 산업 등을 포함하여 식별 가능한 개인에 관한 정보입니다. 또한 회복 기간 동안에 Glow가 수집, 저장, 사용 및 처리하는 개인 정보로는 건강 정보, 종교 또는 유사한 신념과 같은 민감한 개인 정보가 포함됩니다.",
		POLICY_TITLE_B: "B. 정보 수집의 목적 및 범위",
		POLICY_TITLE_1: "정보 수집의 범위",
		POLICY_CONTENT_2:
			"개인정보는 사용자에 관한 정보로서 이름, 주민등록번호, 출생증명서 번호, 여권 번호, 국적, 주소, 전화번호, 팩스 번호, 은행 정보, 신용카드 정보, 인종, 성별, 생년월일, 결혼 여부, 거주 상태, 교육 배경, 재정 상태, 개인 취향, 이메일 주소, 직업, 사용자의 신원, Glow 내에서의 정보, 사용자의 산업, 사용자가 등록 양식, 신청 양식 또는 유사한 양식을 통해 Glow에 제공한 정보, 또는 사용자에 관한 정보 중 Glow가 수집, 저장, 사용 및 처리한 또는 수집, 저장, 사용 및 처리할 정보를 포함합니다. 민감한 개인 정보로는 건강 정보, 종교 또는 유사한 신념과 같은 정보가 포함됩니다.",
		POLICY_CONTENT_3:
			"사용자가 개인정보를 제공하는 것은 전적으로 자발적입니다. 그러나 사용자가 개인정보를 제공하지 않으면 Glow는 사용자의 개인정보를 아래에 기술된 목적 및 추가 목적에 대해 처리할 수 없습니다.",
		POLICY_CONTENT_4:
			"사용자가 대리인, 판매자 또는 서비스 제공자인 경우 사용자의 개인정보 제공은 의무적입니다. 사용자의 개인정보를 제공하지 않을 경우 법률 또는 법적 규정을 위반하게 되며, 이로 인해 Glow가 사용자와 협력하여 서비스 또는 제품을 제공하거나 사용자가 제공하는 제품 또는 서비스에 대한 지급을 할 수 없게 될 수 있습니다.",
		POLICY_CONTENT_5:
			"사용자가 Glow에 직접 제공한 개인정보 외에도 Glow는 다음과 같은 다양한 출처에서 사용자의 개인정보를 수집할 수 있습니다:",
		POLICY_CONTENT_6: "등록 양식, 신청 양식 또는 유사한 양식 작성;",
		POLICY_CONTENT_7: "주소록과 같은 다른 공공 출처로부터;",
		POLICY_CONTENT_8: "사용자가 해당 페이지를 팔로우하거나 좋아하거나 팬인 경우, Glow의 소셜 미디어 페이지로부터;",
		POLICY_CONTENT_9: "T신용 보고 기관으로부터;",
		POLICY_CONTENT_10: "사용자가 어떤 이벤트나 활동에서 Glow와 상호 작용하거나 커뮤니케이션할 때;",
		POLICY_CONTENT_11: "사용자가 Glow가 주최하는 대회에 참여할 때",
		POLICY_CONTENT_12: "Glow에 속하는 다양한 단체나 부서로부터;",
		POLICY_CONTENT_13:
			"Glow의 웹사이트를 사용함으로써, Glow가 운영하고 브랜드 이름에 따라 배치한 모든 웹사이트를 포함합니다 (웹사이트). 사용자의 개인정보는 웹사이트에서 사용되는 쿠키에서 수집될 수 있습니다.",
		POLICY_TITLE_2: "일반 목적:",
		POLICY_TITLE2_CONTENT_1: "사용자의 질문, 의견 및 피드백에 대한 응답;",
		POLICY_TITLE2_CONTENT_2: "이 고지서에 명시된 목적 중 어떤 목적이든 사용자에게 연락하기;",
		POLICY_TITLE2_CONTENT_3: "감사, 데이터 분석, 데이터베이스 저장과 같은 내부 관리 목적 서비스;",
		POLICY_TITLE2_CONTENT_4: "범죄 탐지, 방지 및 고발의 목적을 제공하기;",
		POLICY_TITLE2_CONTENT_5: "법적 의무 준수를 지원하기 위해 Glow를 지원하기;",
		POLICY_TITLE_3: "Glow의 서비스를 사용하는 고객에 대해:",
		POLICY_TITLE3_CONTENT_1: "고객과 체결한 모든 계약의 의무를 이행하기 위해;",
		POLICY_TITLE3_CONTENT_2: "고객의 요청한 서비스를 제공하기 위해;",
		POLICY_TITLE3_CONTENT_3: "고객 등록을 처리하고 고객에게 서비스를 제공하기 위해;",
		POLICY_TITLE3_CONTENT_4:
			"고객이 Glow 애플리케이션(앱)을 다운로드하고 사용하거나, 고객의 요청을 처리하거나, 앱을 제공하고 앱의 사용 라이선스를 제공하기 위해;",
		POLICY_TITLE3_CONTENT_5:
			"고객의 이벤트, 활동, 포커스 그룹, 조사, 대회, 홍보, 투표 또는 제품에 참여하는 것을 처리하기 위해;",
		POLICY_TITLE3_CONTENT_6: "고객의 Glow 구독 등록을 처리, 관리 또는 확인하고, 가입자에게 혜택을 제공하기 위해;",
		POLICY_TITLE3_CONTENT_7:
			"고객의 주문을 확인하고, 고객이 요청한 제품 또는 서비스와 관련된 결제를 처리하기 위해;",
		POLICY_TITLE3_CONTENT_8: "사업의 이해와 분석, 그리고 고객의 비즈니스 요구 및 선호도를 파악하기 위해;",
		POLICY_TITLE3_CONTENT_9: "고객의 요구를 충족시키기 위해 제품과 서비스를 개발, 강화, 제공하기 위해;",
		POLICY_TITLE3_CONTENT_10: "제품 교환 또는 반품을 처리하기 위해;",
		POLICY_TITLE3_CONTENT_11: "대리인, 판매자, 공급업체, 파트너, 계약자 또는 서비스 제공자인 고객에 대해:",
		POLICY_TITLE3_CONTENT_12: "서비스 또는 제품을 제공하기 위해 고객과 협력하는 목적을 제공하기 위해;",
		POLICY_TITLE3_CONTENT_13: "Glow가 협력에 필요한 검사를 조건을 만들거나 허용하기 위해;",
		POLICY_TITLE3_CONTENT_14: "고객이 제공하는 제품 또는 서비스와 관련된 결제를 처리하기 위해;",
		POLICY_TITLE3_CONTENT_15: "고객이나 Glow 고객에게 연락하기 위해.",

		SERVICE_TITLE: "서비스 이용 약관",
		SERVICE_UPDATE: "최종 업데이트: 2023년 4월 1일",
		SERVICE_TITLE_A: "A. 서비스 제공 조건",
		SERVICE_A_CONTENT_1:
			"1. Glow 전자상거래 플랫폼에서 서비스를 제공하는 경우 사용자는 최소한 18세 이상이어야 합니다.",
		SERVICE_A_CONTENT_2:
			"2. Glow 애플리케이션의 금지된 사용 사례에는 매춘 또는 유료 데이트 활동이 포함됩니다. 이러한 활동을 하는 사용자는 계정이 잠길 수 있으며, 법적으로 그 행동에 대한 책임을 져야 합니다.",
		SERVICE_A_CONTENT_3:
			"3. 민감하고 노골적으로 무례한 콘텐츠나 이미지는 엄격히 금지됩니다. 이러한 콘텐츠는 즉시 삭제되며 사용자의 계정은 영구히 중단될 수 있습니다.",
		SERVICE_TITLE_B: "B. Glow 사용자가 알아야 할 일부 수수료",
		SERVICE_B_CONTENT_1:
			"1. 기술 파트너에 대한 것: Glow 시스템에서 성공적인 주문마다 기술 파트너에게 수수료 20% - 40% 가 부과됩니다.",
		SERVICE_B_CONTENT_2:
			"2. 고객에 대한 것: 고객이 Glow 지갑에서 돈을 인출할 때마다 3%의 수수료가 부과됩니다. 인출 거래마다 수수료가 부과되며 인출을 요청하려면 0888129100 핫라인에 문의하십시오.",
		SERVICE_TITLE_C: "C. 계약 관계",
		SERVICE_C_CONTENT_1:
			'이 이용 약관 ("약관")은 글로우 코퍼레이션(주)의 응용 프로그램, 웹사이트, 콘텐츠, 제품 및 서비스("서비스")에 대한 전 세계의 모든 국가에서의 액세스 또는 사용을 규제합니다.',
		SERVICE_C_CONTENT_2:
			"서비스에 대한 액세스 및 사용은 본 약관의 수락을 구성하며, 이러한 수락은 귀하와 Glow 간에 계약적 관계를 형성합니다. 본 약관에 동의하지 않으면 서비스에 액세스하거나 사용할 권리가 없습니다. 이 약관은 이전의 어떠한 계약이나 합의를 대체합니다. Glow는 언제든지 어떤 이유로든 귀하와 관련된 본 약관이나 서비스 중단, 거부 또는 귀하에 대한 본 약관을 종료할 수 있습니다.",
		SERVICE_C_CONTENT_3:
			"특정 서비스에는 추가 조건이 적용될 수 있습니다. 이러한 추가 조건은 특정 이벤트, 활동 또는 프로모션에 대한 정책과 같은 특정 서비스에 적용될 것이며, 이러한 추가 조건은 관련 서비스와 관련하여 귀하에게 통지될 것입니다. 추가 조건은 해당 서비스의 목적을 위해 본 약관의 일부로 간주됩니다. 우선 적용되는 서비스와 관련된 분쟁의 경우 추가 조건이 본 약관에 우선합니다.",
		SERVICE_C_CONTENT_4:
			"Glow는 언제든지 서비스와 관련된 약관을 수정할 수 있습니다. 수정 사항은 Glow가 업데이트된 약관을 이곳에 게시하거나 서비스와 관련된 수정된 정책 또는 추가 조건을 게시한 시점에 효력이 발생합니다. 이러한 게시물 이후에도 서비스에 계속해서 액세스하거나 사용하는 경우 수정된 약관에 동의하는 것을 의미합니다.",
		SERVICE_C_CONTENT_5:
			"서비스와 관련된 개인 정보의 수집 및 사용은 Glow의 개인 정보 보호 정책에서 https://glowvietnam.com/privacy-policy/로 규제됩니다. Glow는 필요한 정보(귀하의 연락처 정보 포함)를 귀하와 제3자 공급업체 간의 보상 요청, 분쟁 또는 갈등, 귀하 및 제3자 공급업체 간의 사고를 포함한 보상 요청 처리 또는 보험 사업을 처리하는 직원에게 제공할 수 있으며, 보상 요청, 분쟁 또는 갈등을 해결하기 위해 필요한 정보나 데이터를 제공합니다.",
		SERVICE_TITLE_D: "D. 서비스",
		SERVICE_D_CONTENT:
			"서비스는 사용자가 서비스의 일부로 제공되는 Glow의 모바일 응용 프로그램 또는 웹사이트(Glow 애플리케이션)를 사용하여 독립적인 제3자 서비스 제공업체와 독립적인 제3자 스파 제공업체를 포함하는 이러한 서비스의 독립적인 제3자 제공업체와 일정한 서비스 및/또는 스파 서비스를 정리하고 예약할 수 있는 기술 플랫폼입니다. Glow의 별도 서면 승인을 제공하지 않는 한, 이러한 서비스는 개인용 비상업적 사용을 위해 제공됩니다.",
		SERVICE_D_TITLE_1: "라이선스",
		SERVICE_D_TITLE_1_CONTENT:
			"본 약관을 준수하는 한, Glow는 귀하에게 제한적인, 비독점적이며 양도 불가능하며 철회 가능하며 비하위 라이선스가 없는 라이선스를 부여합니다. 이 라이선스는 (i) 서비스의 사용을 위한 개인 장치에서 애플리케이션에 액세스하고 사용할 수 있는 라이선스, (ii) 서비스와 관련된 콘텐츠, 정보 및 자료에 액세스하고 사용할 수 있는 라이선스를 제공합니다. 이러한 모든 라이선스 외의 권리는 Glow 및 그 라이선서에 의해 명시적으로 부여되지 않습니다.",
		SERVICE_D_TITLE_2: "제한 사항",
		SERVICE_D_TITLE_2_CONTENT:
			"귀하는 다음을 할 수 없습니다: (i) 서비스의 어떤 부분에서도 저작권, 상표 또는 소유권 고지를 제거하지 않기, (ii) Glow의 명시적인 허가를 받지 않고 서비스의 어떤 부분도 복제, 수정, 파생 작품 생성, 배포, 라이선스 부여, 임대, 판매, 재판매, 양도, 공개적으로 표시, 공개적으로 수행, 전송, 방송하거나, 그 외 어떤 방식으로든 서비스를 활용하거나, (iii) 해당 법률에 허용되는 한 외부로 분해하거나 해독하거나 해석할 수 없게 만들거나, (iv) 서비스의 어떤 부분도 링크하거나 미러하거나 프레임하거나, (v) 서비스의 어떤 부분에 대한 스크래핑, 인덱싱, 조사 또는 기타 데이터 마이닝을 위한 프로그램이나 스크립트를 실행하거나 데이터의 부담이나 기능을 불필요하게 방해하거나 방해하도록 하는 프로그램이나 스크립트를 실행하거나, (vi) 서비스 또는 그와 관련된 시스템이나 네트워크의 어떤 측면에 권한 없는 액세스를 시도하거나 제한하거나",
		SERVICE_D_TITLE_3: "제3자 서비스 및 콘텐츠",
		SERVICE_D_TITLE_3_CONTENT:
			"서비스는 Glow가 제어하지 않는 제3자 서비스 및 콘텐츠(광고 포함)와 관련하여 이용할 수 있거나 접근할 수 있습니다. 귀하가 제3자 서비스 및 콘텐츠를 이용하는 데 적용되는 다른 이용 약관 및 개인 정보 보호 정책이 적용될 수 있음을 인정합니다. Glow는 제3자 서비스 및 콘텐츠를 지지하지 않으며, 어떠한 경우에도 해당 제3자 공급자의 제품이나 서비스에 대한 책임을 지지 않습니다. 또한, Apple Inc., Google, Inc. 및/또는 그들의 해당 국제 자회사와 제휴사들은 Apple iOS, Android 모바일 기기용 응용 프로그램을 통해 서비스에 액세스하는 경우 이 계약의 제3자 수혜자가 될 것입니다. 이러한 제3자 수혜자들은 본 계약의 당사자가 아니며, 어떤 형태로든 서비스의 제공 또는 지원에 책임이 없습니다. 이러한 기기를 사용하여 서비스에 액세스하는 경우 해당 기기의 제3자 수혜자의 서비스 이용 약관에 명시된 조건이 적용됩니다.",
		SERVICE_D_TITLE_4: "소유권 권리",
		SERVICE_D_TITLE_4_CONTENT:
			"서비스 및 본 텍스트의 모든 권리는 Glow 또는 Glow의 라이선서의 소유입니다. 본 약관 및 서비스의 사용은 귀하에게 다음과 같은 권리를 부여하지 않습니다: (i) 본 서비스와 관련하여 (상기 제한된 라이선스를 제외하고) 어떤 권리도; 또는 (ii) 어떤 경우에도 Glow의 회사 이름, 로고, 제품 및 서비스 이름, 상표 또는 서비스 마크를 사용하거나 참조하는 권리.",
		SERVICE_TITLE_E: "E. Glow 서비스 사용",
		SERVICE_E_TITLE_1: "사용자 계정",
		SERVICE_E_TITLE_1_CONTENT:
			'서비스의 대부분의 기능을 활용하려면 개인 사용자 계정("계정")을 등록하고 유지해야 합니다. 계정을 가지려면 해당 국가의 법적 성년 연령(18세 이상 또는 만약 18세와 다른 법적 성년 연령이 적용되는 경우 해당 법적 성년 연령)에 도달해야 합니다. 계정 등록은 이름, 주소, 휴대폰 번호, 연령과 최소한 하나의 유효한 결제 방법(신용카드 또는 승인된 결제 파트너)과 같은 일부 개인 정보를 Glow에 제공하도록 요구합니다. 계정에 정확하고 완전하며 최신 정보를 유지하기로 동의합니다. 정확하고 완전하며 최신 정보를 유지하지 않거나 프로필에 유효하지 않거나 만료된 결제 방법을 제공하지 않는 경우, 서비스 접근 및 사용 손실 또는 귀하와 Glow 간의 본 계약 종료의 원인이 될 수 있습니다. 귀하는 계정 아래에서 발생하는 모든 활동에 대한 책임이 있으며, 사용자 이름과 계정 비밀번호의 보안과 기밀성을 항상 유지할 것에 동의합니다. Glow로부터 명시적으로 서면으로 허용되지 않는 한, 귀하는 하나의 계정만 소유할 수 있습니다.',
		SERVICE_E_TITLE_2: "사용자 요구사항 및 행동",
		SERVICE_E_TITLE_2_CONTENT_1:
			"18세 미만의 사용자에게는 서비스를 제공하지 않습니다. 귀하는 타인에게 계정 사용을 승인하거나 18세 미만의 개인이 귀하와 함께 동반되지 않은 상태에서 제3자 제공업체로부터 운송 또는 물류 서비스를 받을 수 없습니다. 귀하는 계정을 다른 개인이나 법적 주체에게 양도하거나 할당할 수 없습니다. 귀하는 서비스를 사용할 때 모든 적용 가능한 법률을 준수해야 하며, 서비스를 합법적인 목적으로만 사용해야 합니다. 서비스를 사용할 때 제3자 제공업체나 기타 어떤 당사자에게 귀찮음, 불편함, 피해 또는 재산 훼손을 유발해서는 안 됩니다. 일부 경우에는 액세스 또는 사용 자격 증명을 제공해야 할 수 있으며, 필요한 자격 증명을 제공하지 않으면 귀하는 서비스 액세스 또는 사용이 거부될 수 있다는 것에 동의합니다.",
		SERVICE_E_TITLE_2_CONTENT_2:
			"Glow 시스템으로 고객을 유치하기 위한 모든 노력은 엄격히 금지됩니다. Glow 시스템으로 고객을 유치하는 것은 Glow의 고객(직원 포함)과 비공개적으로 협상하여 Glow 베트남 서비스를 제공하는 것을 의미합니다. Glow는 이와 같은 행위에 대해 사전 통지 없이 서비스 거부 또는 계정 정지를 결정할 권리를 보유합니다. 각 고객(직원 포함)당 귀하는 Glow에게 1명당 5,000,000 VND의 보상을 해야 합니다.",
		SERVICE_E_TITLE_2_CONTENT_3:
			"신속한 조치나 위반 시 베트남 법을 준수해야 하는 고객 및 협력 파트너. Glow는 고객과 협력 파트너 간의 행동에 대해 책임을 지지 않습니다. 소송 또는 분쟁이 발생한 경우 고객 및 협력 파트너는 서로 직접 협력하며, 정당한 기관의 요청에 따라 필요한 정보를 Glow가 제공할 것입니다.",
		SERVICE_E_TITLE_3: "문자 메시지",
		SERVICE_E_TITLE_3_CONTENT:
			"계정을 생성함으로써 귀하는 서비스가 귀하에게 일반적인 비즈니스 운영의 일환으로 텍스트 메시지 알림(SMS)을 전송할 수 있음에 동의합니다. 귀하는 언제든지 support@glowvietnam.com으로 이메일을 보내어 텍스트 메시지 알림(SMS)을 더 이상 받지 않기로 선택할 수 있으며, 메시지를 받는 휴대폰 번호와 함께 기재해야 합니다. 텍스트 메시지 알림(SMS)을 받지 않기로 선택하면 서비스 이용에 영향을 줄 수 있다는 점을 인정합니다.",
		SERVICE_E_TITLE_4: "프로모션 코드",
		SERVICE_E_TITLE_4_CONTENT:
			'Glow는 계정 크레딧, 기능 또는 제3자 제공업체의 서비스와 관련된 기타 혜택을 교환하기 위한 프로모션 코드("프로모션 코드")를 생성할 수 있습니다. 이 프로모션 코드는 Glow 베트남이 각 프로모션 코드에 대한 추가 조건에 따라 제공됩니다. 귀하는 다음과 같은 프로모션 코드 사용에 동의합니다: (i) 목적지 및 용도에 따라 사용되어야 하며, 법과 일치하는 방식으로 사용되어야 합니다; (ii) 어떤 방식으로든',
		SERVICE_E_TITLE_5: "사용자 제공 콘텐츠",
		SERVICE_E_TITLE_5_CONTENT_1:
			"복사, 판매 또는 양도되거나 공개될 수 없으며(공개적으로 게시되거나 기타 방식으로든 상관 없음), Glow 베트남의 허락 없이는 공개될 수 없습니다; (iii) Glow는 어떤 이유로든 언제든지 해당 프로모션 코드를 비활성화할 수 있습니다(이에 대해 Glow 베트남이 책임을 지지 않음); (iv) 해당 프로모션 코드에 대한 Glow 베트남의 구체적인 조건에 따라만 사용될 수 있습니다; (v) 현금 가치가 없습니다; 및 (vi) 사용자가 프로모션 코드를 오류, 부정 행위, 불법 행위 또는 해당 프로모션 코드 조건이나 본 약관을 위반하는 경우, 또는 그러한 경우로 여기는 경우에는 Glow가 해당 프로모션 코드를 사용하거나 교환한 크레딧, 기능 또는 기타 혜택을 보류하거나 차감할 수 있는 권한이 있습니다.",
		SERVICE_E_TITLE_5_CONTENT_2:
			"Glow는 여러 시점에 걸쳐 텍스트, 오디오 및/또는 시각적 서비스 기능을 통해 서비스와 관련된 콘텐츠 및 정보(의견 및 피드백, 서비스 지원 요청, 공모전 및 프로모션 제출물)를 제출, 업로드, 게시 또는 제공할 수 있는 권한을 부여할 수 있습니다. 제공하는 모든 사용자 콘텐츠는 귀하의 소유로 유지됩니다. 그러나 사용자 콘텐츠를 Glow에 제공함으로써 귀하는 사용자 콘텐츠를 사용, 복사, 수정, 파생 작품 생성, 배포, 공개 공연, 공개 표시하고 어떤 방식으로든 활용할 수 있는 비독점적이고 철회 불가능한, 이전 가능한, 전 세계적인, 하위 라이선스 가능한 라이선스를 Glow에 부여합니다(현재 알려진 형식 및 배포 채널과 이후 개발된 모든 형식과 배포 채널을 포함하여, 서비스와 Glow의 비즈니스 운영, 제3자 웹사이트 및 서비스와 연결하여). 귀하의 동의나 동의 없이 귀하나 다른 어떤 개인 또는 엔터티에게 어떤 지불도 요구하지 않고서도 사용자 콘텐츠를 활용할 수 있습니다.",
		SERVICE_E_TITLE_5_CONTENT_3:
			"귀하는 다음을 보증합니다: (i) 모든 사용자 콘텐츠의 독점 소유자이거나 사용자 콘텐츠를 위해 필요한 모든 권리, 라이선스, 동의 및 해제를 소유하고 있거나 위임할 수 있습니다. 위에 설명된 사용자 콘텐츠의 라이선스를 Glow에 부여하기 위해서; 그리고 (ii) 사용자 콘텐츠 또는 정보가 귀하의 제출, 업로드, 게시 또는 제공한 사용자 콘텐츠 또는 Glow 베트남이 본 계약에 따라 허용하는 대로 사용자 콘텐츠를 사용하는 것이 모든 제3자의 지적 재산 권리나 소유권 권리, 공공 또는 개인 정보 권리를 침해하지 않을 것을 보증합니다. 귀하는 더 이상 보호받을 수 있을지 모를 경우라 할지라도, 명예를 훼손하거나 중상을 입힐 수 있는, 적법하지 않거나 그 밖의 모든 방식으로 불쾌하거나 혐오스러운 사용자 콘텐츠를 제공하지 않기로 동의합니다. Glow는 필요한 경우 사용자 콘텐츠를 검토, 모니터링 또는 삭제할 수 있지만 이에 의무가 없으며 언제든지 사전 통지 없이 이를 결정할 수 있습니다.",
		SERVICE_E_TITLE_6: "네트워크 액세스 및 기기",
		SERVICE_E_TITLE_6_CONTENT:
			"서비스를 사용하기 위해 필요한 데이터 네트워크 액세스를 획득하는 것은 귀하의 책임입니다. 무선 기기를 통해 서비스에 액세스하거나 사용하는 경우 이동 통신 네트워크의 데이터 및 메시징 요금이 적용될 수 있으며, 해당 요금은 귀하가 부담하게 됩니다. 서비스에 액세스하고 사용하기 위해 호환되는 하드웨어나 기기를 획득하고 업데이트하는 것은 귀하의 책임입니다. Glow는 서비스 또는 해당 일부가 특정 하드웨어나 기기에서 작동할 것이라고 보장하지 않습니다. 게다가 서비스는 인터넷 및 전자 통신의 사용에 내재된 기능 오류와 지연에 영향을 받을 수 있습니다.",
		SERVICE_TITLE_F: "F. 결제",
		SERVICE_F_CONTENT_1:
			'귀하는 서비스 이용으로 인해 제3자 제공업체로부터 받는 서비스 또는 상품에 대한 비용("요금")이 발생할 수 있다는 점을 이해하셔야 합니다. 서비스를 통해 서비스 또는 상품을 받은 후, Glow는 제3자 제공업체의 대리 지불 수취인으로서 해당 제3자 제공업체를 대신하여 해당 요금의 지불을 용이하게 할 것입니다. 이러한 방식으로 요금을 지불하는 것은 귀하가 직접 제3자 제공업체에게 지불한 것과 동일하게 간주될 것입니다. 요금에는 법적으로 요구되는 모든 적용 세금이 포함될 것입니다. 지불한 요금은 최종적이며 환불되지 않으며, Glow의 결정에 따라 다르게 결정되지 않는 한 그렇습니다. 귀하는 서비스를 받을 때 제3자 제공업체에게 요금을 낮게 요청할 수 있는 권리를 보유합니다. Glow는 제3자 제공업체로부터 특정 서비스 또는 상품의 요금을 수정하도록 요청하는 경우 응답할 것입니다.',
		SERVICE_F_CONTENT_2:
			"모든 요금은 즉시 지불되어야 하며 지불은 귀하의 계정에 지정된 우선 결제 방법을 통해 Glow 베트남에 의해 용이하게 될 것입니다. 주요 계정 결제 방법이 만료되었거나 유효하지 않거나 기타 이유로 청구할 수 없는 것으로 판정되는 경우, Glow는 제3자 제공업체의 대리 지불 수취인으로서 계정의 보조 결제 방법을 사용할 수 있는 경우, 사용할 수 있습니다.",
		SERVICE_F_CONTENT_3:
			"귀하와 Glow 간에는 Glow가 전적으로 재량에 따라 언제든지 서비스를 통해 얻은 모든 서비스 또는 상품에 대한 요금을 설정, 제거 및/또는 개정할 권리가 있습니다. 더 나아가 귀하는 특정 지리적 영역에서 적용되는 요금이 수요가 높은 시기에 상당히 증가할 수 있다는 점을 인지하고 동의합니다. Glow는 적용 가능한 요금을 알리기 위해 합리적인 노력을 기울일 것이며, 이에 따른 요금에 대한 책임은 해당 요금이나 그 금액에 대한 인식 여부와 상관없이 귀하의 계정 하에서 발생한 요금에 귀하가 책임을 질 것임을 인정합니다. 때로는 Glow는 특정 사용자에게 특별 할인을 제공하거나 할인을 제공할 수 있으며, 이로 인해 동일하거나 유사한 서비스 또는 상품에 대해 청구되는 금액이 다를 수 있습니다. 귀하는 이러한 프로모션 또는 할인 프로그램이 귀하의 서비스 이용이나 귀하에게 적용되는 요금에 영향을 미치지 않을 것이라는 점에 동의합니다. 당신에게도 제공되는 경우를 제외하고는요금을 적용하지 않습니다. 제3자 제공업체로부터 서비스 또는 상품을 요청한 요청 이전에 언제든지 요청을 취소할 수 있으며, 이 경우 취소 수수료가 부과될 수 있습니다.",
		SERVICE_F_CONTENT_4:
			'이 결제 구조는 제3자 제공업체가 제공한 서비스 또는 상품에 대한 비용을 완전히 상환하기 위한 것입니다. Glow는 귀하의 결제의 일부를 제3자 제공업체에 대한 팁으로 지정하지 않습니다. Glow(웹사이트, 앱 또는 Glow의 마케팅 자료에서)가 팁이 "자발적," "선택적" 및/또는 서비스 또는 상품 제공에 대한 귀하의 지불에 "포함된" 것으로 언급하는 것은 제3자 제공업체에게 위에서 설명한 금액을 초과하는 추가 금액을 제공할 것이라는 시사를 위한 것이 아닙니다. 귀하가 서비스를 통해 얻은 서비스 또는 상품을 제공하는 제3자 제공업체에게 추가 지불을 제공할 수는 있지만 이를 하지 않을 의무는 없다는 점에 동의합니다. 팁은 자발적입니다. 귀하가 서비스를 통해 얻은 서비스 또는 상품을 받은 후에는 경험을 평가하고 제3자 제공업체에 대한 추가 피드백을 남길 기회가 있습니다.',
		SERVICE_TITLE_G: "G. 면책조항",
		SERVICE_G_CONTENT:
			'서비스는 "있는 그대로" 및 "사용 가능한 상태"로 제공됩니다. Glow는 본 약관에 명시적으로 기술되지 않은 모든 명시적, 묵시적 또는 법적인 보증과 대표성을 거부합니다. 이 외에도 Glow는 서비스, 서비스를 통해 요청한 서비스 또는 상품의 신뢰성, 시기적 적절성, 품질, 적합성 또는 가용성에 관한 어떠한 표현, 보증 또는 보증도 하지 않습니다. 또한 Glow 베트남은 제3자 제공업체의 품질, 적합성, 안전성 또는 능력을 보장하지 않습니다. 귀하는 서비스 이용과 관련하여 발생하는 모든 위험이 귀하에게 완전히 전적으로 남아 있음을 인정하며, 적용 가능한 법률에 따라 최대한의 범위 내에서 유지됩니다',
		SERVICE_TITLE_H: "H. 책임 제한",
		SERVICE_H_CONTENT_1:
			"Glow는 간접 손해, 부수적인 손해, 특별한 손해, 우수한 손해, 징계적 손해 또는 결과적 손해를 포함한 어떠한 손해도 책임지지 않습니다. 이에는 이용에 관한 어떠한 손실, 데이터 손실, 개인상해 또는 재산 피해도 포함될 수 있으며, 서비스의 이용과 관련하여 발생한 경우이든 그렇지 않은 경우이든 불문하고 해당 손해로 인한 결과가 될 수 있습니다.",
		SERVICE_H_CONTENT_2:
			"Glow 베트남은 (i) 서비스의 사용 또는 서비스에 액세스 또는 이용할 수 없는 경우에 발생하는 손해 또는 책임; 또는 (ii) 귀하와 제3자 제공업체 간의 거래나 관계와 관련하여 발생하는 손해, 책임 또는 손실, 이를 초래하지 않습니다. Glow 베트남은 합리적으로 제어 가능한 범위 내에서 성능 지연이나 실패에 대한 책임을 지지 않습니다.",
		SERVICE_H_CONTENT_3:
			"귀하는 제3자 제공업체가 일부 요청 브랜드를 통해 요청한 서비스를 제공할 수 있으며 서비스를 제공하기 위해 필요한 비즈니스 라이선스 또는 허가를 보유하지 않거나 전혀 라이선스 또는 허가를 보유하지 않을 수 있음을 인정합니다. 어떠한 경우에도 Glow의 총 책임은 모든 손해, 손실 및 소송 사유에 대해 귀하에게 지불할 금액을 초과하지 않습니다(500,000 동(VND)까지).",
		SERVICE_H_CONTENT_4:
			"이 섹션의 한계와 면책은 적용 가능한 법률에 의해 제외되지 않을 소비자의 권리를 제한하거나 변경하려는 의도가 없습니다.",
		SERVICE_TITLE_I: "I. 배상",
		SERVICE_I_CONTENT:
			"귀하는 서비스 또는 서비스를 통해 얻은 상품을 이용한 결과로 발생한 모든 소송, 청구, 손실, 책임 및 비용(변호사 비용 포함)에 대해 Glow와 그 임원, 이사, 직원 및 대리인을 면책하고 보호하고 그로부터 해방될 것에 동의합니다. (i) 서비스 이용; (ii) 본 약관 중 어느 하나를 위반하거나 또는 위반하거나 위반한 것; (iii) Glow가 사용자 콘텐츠를 사용하는 것; 또는 (iv) 제3자의 권리를 위반한 경우를 포함합니다.",

		REGULATION_TITLE: " 운영 규정 ",
		REGULATION_UPDATE: " 최종 업데이트: 2023년 4월 1일 ",
		REGULATION_CONTENT:
			" Glow 어플리케이션은 Spa, 마사지, 치료, 미용 등 분야의 서비스 제공자와 Spa 및 미용 서비스 등을 이용하려는 개인들을 연결하는 전자 상거래 플랫폼입니다. Glow 어플리케이션은 다양한 유형의 서비스에 대한 온라인 정보를 접근하거나 이러한 서비스의 온라인 예약을 하려는 사용자들에게 최대한의 지원을 제공하기 위해 설계되었습니다.",
		REGULATION_I: " I. 일반 원칙 ",
		REGULATION_I_CONTENT_1:
			"Glow 전자 거래 플랫폼은 BK VIETNAM TECHNOLOGY JOINT STOCK COMPANY (회사)가 운영 및 관리하는 것입니다. 전자 거래 플랫폼의 사용자는 Glow에서 인정하고 승인한 합법적인 Spa, 마사지 서비스 분야의 거래자 및 조직 및 해당 서비스를 사용할 수 있도록 허용된 자로 구성됩니다.",
		REGULATION_I_CONTENT_2:
			"이러한 원칙은 Glow 전자 상거래 플랫폼에서 등록 사용자에게 적용되며 이들은 Glow 전자 상거래 플랫폼에서 서비스 리스트를 게시하고 참여하는 사용자입니다.",
		REGULATION_I_CONTENT_3:
			"Glow 전자 상거래 플랫폼에서 거래 및 조직, 개인이 참여하는 거래는 계약을 통해 서비스 이용 당사자의 합법적인 권리와 이익을 존중하는 원칙을 기반으로 협상을 자유롭게 할 수 있으며 법률을 위반하지 않아야 합니다.",
		REGULATION_I_CONTENT_4: "Glow에서 사용자로 참여하는 거래자 및 조직의 정보는 투명하고 정확해야 합니다.",
		REGULATION_I_CONTENT_5:
			"Glow 전자 상거래 플랫폼에서 거래에 참여하는 서비스는 관련 법률 규정을 준수해야 하며, 금지된 사업 활동이나 법에 의해 금지된 광고에 해당해서는 안 됩니다.",
		REGULATION_I_CONTENT_6:
			"Glow 전자 상거래 플랫폼을 통한 거래는 공개적이고 투명하게 진행되어 고객/사용자의 권리를 보장해야 합니다.이 규정 내 모든 내용은 베트남의 기존 법률 체계를 준수해야 합니다. Glow 전자 상거래 플랫폼에 참여하는 사용자는 베트남의 현행 법률과 관련하여 자신의 법적 책임을 개인적으로 이해하고 Glow 전자 상거래 플랫폼 규정 내용을 준수할 것을 약속합니다.",
		REGULATION_I_CONTENT_7: "",
		REGULATION_I_CONTENT_8: "",
		REGULATION_II: "II. 일반 규정",
		REGULATION_II_CONTENT_1:
			"전자 상거래 거래 명칭: Glow 전자 상거래 플랫폼은 BK VIETNAM TECHNOLOGY JOINT STOCK COMPANY가 개발한 어플리케이션 이름이 Glow인 전자 상거래 플랫폼을 의미합니다.",
		REGULATION_II_CONTENT_2: "일반적인 정의:",
		REGULATION_II_CONTENT_3: "- 기술자: Spa 및 마사지 서비스 정보를 게시하는 등의 서비스 제공이 필요한 개인.",
		REGULATION_II_CONTENT_4: "- 고객(고객/사용자): Glow에 게시된 서비스를 이용하려는 거래자, 조직, 개인.",
		REGULATION_II_CONTENT_5: "- 사용자: 기술자와 고객(기술자 및 고객) 모두를 포함합니다.",
		REGULATION_II_CONTENT_6:
			"Glow에서 거래를 하거나 웹사이트에서 서비스를 이용하는 필요가 있는 거래자, 조직 및 개인들이 Glow에서 거래를 하는 사용자입니다.",
		REGULATION_II_CONTENT_7:
			"사용자는 초기에 등록하고 관련 개인 정보를 제공해야 하며, 이 정보는 Glow 관리위원회에서 인정하고 Glow가 제공하는 서비스를 사용할 수 있는 권한을 부여한 정보여야 합니다.",
		REGULATION_II_CONTENT_8: "Glow 사용자로 등록할 때, 이해하는 바는 다음과 같습니다:",
		REGULATION_II_CONTENT_9: "- 사용자는 개인 계정을 생성하여 사용할 수 있습니다.",
		REGULATION_II_CONTENT_10:
			"- 사용자는 Glow에 공개된 합법적인 거래자가 약속한 올바른 가격과 기준에 따라 서비스를 예약할 수 있습니다.이 규정의 내용은 베트남의 기존 규정과 일치합니다. Glow에 참여하는 사용자는 베트남의 현행 법률과 관련하여 자신의 법적 책임을 개인적으로 이해하고 Glow의 내용을 준수할 것을 약속합니다.",
		REGULATION_II_CONTENT_11: "",
		REGULATION_III: "III. 거래 절차",
		REGULATION_III_1: "1. 고객 절차",
		REGULATION_III_1_CONTENT_1: "- 고객이 Glow에서 상품을 구매하려는 의사가 있을 경우 아래 단계를 따라야 합니다:",
		REGULATION_III_1_CONTENT_2: "서비스 정보 검색 및 참고",
		REGULATION_III_1_CONTENT_3:
			"- 고객은 기술자가 제공한 정보를 기반으로 선택하고 예약을 진행합니다. 선택한 후 예약 버튼을 누르고 정보를 입력한 다음 결제를 진행할 수 있습니다.",
		REGULATION_III_1_CONTENT_4: "기술자는 고객과 일정을 확인하기 위해 연락할 것입니다.",
		REGULATION_III_2: "2. 기술자 및 Glow 경영진 절차",
		REGULATION_III_21: "2.1. 계정 생성",
		REGULATION_III_21_CONTENT: "- 계정 등록: 기술자는 Glow 어플리케이션에 계정을 등록합니다.",
		REGULATION_III_22: "2.2. 서비스 제공 등록",
		REGULATION_III_22_CONTENT_1: "- 기술자는 파트너로 등록하려는 경우 등록 섹션에 접속합니다.",
		REGULATION_III_22_CONTENT_2: "- 기술자는 완전한 개인 정보를 제공합니다. ",
		REGULATION_III_22_CONTENT_3: "- 개인 정보를 저장하려면 저장을 선택합니다.",
		REGULATION_III_23: "2.3. Glow 경영진 절차",
		REGULATION_III_23_CONTENT_1: "이 정보는 관리 페이지에 저장되며 Glow 어플리케이션에서 표시됩니다.",
		REGULATION_III_23_CONTENT_2:
			"경영진은 사용자 및 기술자로부터 정보를 검토하기 위해 키워드 필터링 도구를 활용한 사후 심사 작업을 수행합니다.",
		REGULATION_III_3: "3. 반품 및 환불 정책",
		REGULATION_III_3_CONTENT_1:
			"Glow는 서비스 제공자가 아니므로 서비스의 반품 및 교환은 각 기술자의 정책에 따라 진행됩니다.",
		REGULATION_III_3_CONTENT_2: "Glow는 기술자가 게시할 때 완전한 서비스 정보를 제공하도록 요구합니다.",
		REGULATION_III_3_CONTENT_3:
			"Glow는 사용자에게 서비스를 예약하기 전에 정보를 주의 깊게 읽거나 직접 기술자에게 문의하도록 권고합니다.",
		REGULATION_III_3_CONTENT_4: "Glow는 사용자의 요구에 따라 가능한 한 환불 및 반품 문제를 지원할 것입니다.",
		REGULATION_III_4: "4. 분쟁 해결 및 불만 처리 절차",
		REGULATION_III_4_CONTENT_1:
			" 단계 1: 기술자의 서비스에 대한 불만을 가진 사용자는 이메일(binhdoh@glowvietnam.com)로 불만을 제기할 수 있습니다. 사용자는 또한 직접 관리 부서에 신고할 수 있습니다. BK VIETNAM TECHNOLOGY JOINT STOCK COMPANY",
		REGULATION_III_4_CONTENT_2:
			" 단계 2: Glow 고객 지원 부서는 사용자로부터 불만을 접수합니다. 불만의 성격 및 심각성에 따라 Glow는 분쟁 해결을 지원하기 위해 특정 조치를 취할 것입니다.",
		REGULATION_III_4_CONTENT_3:
			" 단계 3: Glow의 관할 범위를 벗어나는 경우, 경영진은 고객에게 법에 따라 관련 권한 있는 국가 기관에 문제를 eskalieren하도록 요청할 것입니다.",
		REGULATION_III_4_CONTENT_4: " 사용자는 불만을 다음 주소로 보낼 수 있습니다:",
		REGULATION_III_4_CONTENT_5: " BK VIETNAM TECHNOLOGY JOINT STOCK COMPANY",
		REGULATION_III_4_CONTENT_6: " 주소: 하노이, 베트남 코지안구 트룽호아 동 169호, 층 14",
		REGULATION_III_4_CONTENT_7: " 전화: 0888129100",
		REGULATION_III_4_CONTENT_8: " 이메일: binhdoh@glowvietnam.com",
		REGULATION_III_4_CONTENT_9: " 불만, 경고, 분쟁 규정",
		REGULATION_III_4_CONTENT_10: "모든 게시물은 다음 조건을 충족해야 하며 그렇지 않으면 차단될 것입니다:",
		REGULATION_III_4_CONTENT_11: "신고 대상이 Glow 사용자임;",
		REGULATION_III_4_CONTENT_12: "사건은 사용자가 Glow에서 게시한 사항과 관련되어야 함;",
		REGULATION_III_4_CONTENT_13: "구체적인 증거가 제공되어야 함;",
		REGULATION_III_4_CONTENT_14: "모욕적이거나 학대적인 언어를 사용하지 않아야 함;",
		REGULATION_III_4_CONTENT_15: "불만은 구체적이고 명확하며 다음을 포함해야 합니다:",
		REGULATION_III_4_CONTENT_16: "T불만을 제기하는 사용자의 계정;",
		REGULATION_III_4_CONTENT_17: "관련 증거 링크;",
		REGULATION_III_4_CONTENT_18:
			"Glow는 고객(사용자)의 권리를 보호하기 위해 법적 규정을 존중하고 엄중하게 시행합니다. 따라서 사용자는 플랫폼에 게시할 때 서비스와 관련된 완전하고 정확하며 진실하고 상세한 정보를 제공하도록 권고받습니다. 모든 기만적 또는 사기적인 사업 활동은 법에 따라 비난 받고 법적 책임을 지게 될 것입니다.",
		REGULATION_III_4_CONTENT_19:
			"기술자 및 사용자를 포함한 모든 당사자는 문제 해결에 적극적인 책임을 져야 합니다. 기술자는 사용자에게 충돌 사건과 관련된 정보를 인증하는 문서를 제공해야 합니다. Glow는 사용자 또는 분쟁에 관련된 당사자로부터 요청 시 사용자와 기술자에 대한 정보를 제공할 것입니다.",
		REGULATION_III_4_CONTENT_20:
			"기술자와 사용자가 분쟁을 해결한 후 Glow 관리부에 알려야 합니다. 기술자의 잘못이 있는 충돌 거래의 경우, Glow는 위반의 심각성에 따라 경고를 발행하거나 계정을 잠그거나 적절한 법적 권한 기관에 사례를 eskalieren할 것입니다. Glow는 플랫폼에 기술자와 관련된 모든 서비스 정보를 종료하고 제거하며 사용자와의 계약에 따라 합리적인 보상을 기술자에게 요구할 것입니다.",
		REGULATION_III_4_CONTENT_21:
			"양측(사용자 및 기술자) 간의 분쟁이 상호 합의로 해결되지 않은 경우 양측 중 하나(사용자 또는 기술자)는 모든 당사자의 합법적 이익을 보장하기 위해 관련 법적 권한의 개입을 요구할 권리가 있습니다, 특히 사용자의 경우.",
		REGULATION_IV: "IV. 결제 절차",
		REGULATION_IV_1: "1. 기술자와 Glow 거래 플랫폼 소유자 간 주문 할인율 결제",
		REGULATION_IV_1_CONTENT:
			"기술자(서비스 제공자)에 대한 내용: Glow 시스템에서 성공적으로 주문한 경우, Glow는 서비스 제공 사용자로부터 % 수수료를 청구합니다. 이 수수료는 Glow가 시스템을 유지하고 브랜드를 홍보하는 데 필수적입니다.",
		REGULATION_IV_2: "2. 사용자와 기술자 간 결제",
		REGULATION_IV_2_CONTENT_1:
			"사용자와 기술자는 Glow를 통해 지불을 진행하며 Glow에서 지정한 결제 방법에 따릅니다.",
		REGULATION_IV_2_CONTENT_2: "고객은 Glow 지갑을 통해 지불을 할 수 있습니다.",
		REGULATION_IV_2_CONTENT_3:
			"전자 지갑 결제 방법의 경우, 고객은 VND 지갑에 돈을 입금할 것입니다. 입금 옵션을 클릭하십시오. 입금 인터페이스에는 입금 금액 및 입금 방법(은행 송금, 비자)이 포함될 것입니다.",
		REGULATION_IV_2_CONTENT_4:
			"지갑에서 돈을 인출하려면 BK VIETNAM TECHNOLOGY JOINT STOCK COMPANY에 문의하십시오. 주소: 하노이, 베트남 코지안구 트룽호아 동 169호, 층 14.",
		REGULATION_IV_3: "3. 거래 보안 보장",
		REGULATION_IV_3_CONTENT_1: "성공적인 거래를 보장하고 잠재적인 리스크를 최소화하기 위해:",
		REGULATION_IV_3_CONTENT_2:
			"기술자는 개인 정보 섹션에 완전한 정보(이름, 주소, 전화번호, 이메일)를 제공해야 합니다.",
		REGULATION_IV_3_CONTENT_3:
			"사용자는 이메일 또는 기타 연락 수단을 통해 누구에게도 상세한 결제 정보를 제공해서는 안됩니다. Glow는 사용자가 인터넷이나 이메일을 통해 정보를 교환하면 발생할 수 있는 모든 손실 또는 리스크에 대해 책임지지 않습니다.",
		REGULATION_IV_3_CONTENT_4:
			"사용자는 시스템을 방해하거나 데이터 구조를 변경하는 데 사용되는 프로그램, 도구 또는 기타 방법을 사용해서는 안 됩니다. 웹 사이트 시스템을 방해, 중단 또는 침입시키는 활동을 배포, 홍보 또는 권장하는 것은 엄격히 금지됩니다. 어떠한 위반 사항도 규정과 법적 조항에 따라 처리될 것입니다.",
		REGULATION_IV_3_CONTENT_5: "모든 거래 정보는 법적 당국에 의해 공개되어야 할 필요가 없는 한 비밀로 유지됩니다.",
		REGULATION_V: "V. 사용자 개인 정보 보호 정책",
		REGULATION_V_1: "1. 수집의 목적 및 범위",
		REGULATION_V_1_CONTENT_1: " Glow 어플리케이션에 계정을 등록할 때 수집되는 정보:",
		REGULATION_V_1_CONTENT_2:
			" 기술자(서비스 제공자)용: 기술자가 Glow 플랫폼에 계정을 가질 의사가 있을 때, 전화번호, 이메일, 이름, 로그인 비밀번호와 같은 완전한 정보를 등록합니다.",
		REGULATION_V_1_CONTENT_3:
			" 사용자용: Glow 어플리케이션에 계정을 등록하는 사용자는 전화번호, 이메일, 이름, 로그인 비밀번호와 같은 정보를 제공해야 합니다.",
		REGULATION_V_1_CONTENT_4: " 사용 중:",
		REGULATION_V_1_CONTENT_5:
			" - 기술자(서비스 제공자)용: 기술자는 제공하는 서비스 정보를 제공하고 현재 주소 및 연락처 정보를 정기적으로 업데이트해야 합니다.",
		REGULATION_V_1_CONTENT_6:
			" - 사용자용: 사용자가 집 또는 다른 장소에서 서비스를 선택하는 경우 주소와 연락처 정보를 제공해야 합니다.",
		REGULATION_V_1_CONTENT_7: " - 사용자가 제공한 정보는 다음과 같은 목적으로 사용될 수 있습니다:",
		REGULATION_V_1_CONTENT_8: " + 사용자의 요청에 따라 Glow 어플리케이션에서 서비스 제공;",
		REGULATION_V_1_CONTENT_9: " + 새로운 사용자에게 Glow 어플리케이션의 서비스 소개 정보를 전송;",
		REGULATION_V_1_CONTENT_10: "+ 서비스(어플리케이션 포함), 기술, 과정을 분석, 평가 및 개선;",
		REGULATION_V_1_CONTENT_11: "+ 사용자와의 상호 작용과 연결 강화;",
		REGULATION_V_1_CONTENT_12: "+ Glow 어플리케이션의 사용과 관련된 분쟁 및 불만 해결;",
		REGULATION_V_1_CONTENT_13: "+ 베트남에서의 불법 활동 방지.",
		REGULATION_V_1_CONTENT_14:
			"- 사용자의 동의 없이 Glow는 사용자와 관련된 어떤 정보도 광고 목적으로 제3자에게 제공하지 않을 것입니다.",
		REGULATION_V_2: "2. 정보에 대한 권한 부여",
		REGULATION_V_2_CONTENT_1:
			"사용자는 필요한 경우 다음의 기관/조직/개인이 사용자의 개인 정보에 액세스하고 수집할 권리가 있다는 것에 동의합니다:",
		REGULATION_V_2_CONTENT_2: "- 기술자/서비스 제공자",
		REGULATION_V_2_CONTENT_3: "- 운송, 결제 서비스 제공자",
		REGULATION_V_2_CONTENT_4: "- 고객 관리 부서",
		REGULATION_V_2_CONTENT_5: "- Glow 거래 플랫폼 관리자",
		REGULATION_V_2_CONTENT_6: "- 권한 있는 국가 기관(법적 요건의 경우)",
		REGULATION_V_2_CONTENT_7: "- 사용자 위반 증거를 제시하는 불만 제기자(있는 경우)",
		REGULATION_V_3: "3. Glow 거래 플랫폼 운영자의 주소:",
		REGULATION_V_3_CONTENT_1: "BK VIETNAM TECHNOLOGY JOINT STOCK COMPANY",
		REGULATION_V_3_CONTENT_2: "주소: 하노이, 베트남 코지안구 트룽호아 동 169호, 층 14.",
		REGULATION_V_3_CONTENT_3: "전화: 0888129100",
		REGULATION_V_3_CONTENT_4: "이메일: binh.do@glowvietnam.com",
		REGULATION_V_4: " 4.보관 기간 ",
		REGULATION_V_4_CONTENT_1:
			"+ 사용자는 Glow 어플리케이션의 사용자가 아닌 경우 개인 데이터 삭제를 Glow에 요청할 수 있습니다. + 사용자 정보는 사용자의 요청을 처리하기 위해 필요한 기간 동안 보관됩니다.",
		REGULATION_V_5: "5. 개인 정보 변경 방법",
		REGULATION_V_5_CONTENT_1:
			" 사용자는 Glow 어플리케이션에 액세스하려면 계정 이름과 비밀번호가 있는 계정을 부여받습니다. 로그인한 후에 사용자는 개인 정보를 편집할 수 있습니다.",
		REGULATION_V_5_CONTENT_2:
			" Glow 어플리케이션은 사용자 정보를 보호하기 위해 노력하며 사용자가 Glow 어플리케이션의 서비스 사용 중에 제공하는 정보를 보호하기 위해 적절한 조치를 취할 것입니다.",
		REGULATION_V_5_CONTENT_3:
			" 사용자의 허락 없이는 사용자의 허가 없이 데이터 정보를 제3자에게 판매하거나 이전하지 않을 것입니다. 단, 해당 사용자 정보를 권한 있는 국가 기관에 제공해야 하는 경우를 제외하고는 말이죠.",
		REGULATION_V_5_CONTENT_4:
			" 사용자 정보를 저장하는 서버가 공격을 받아 데이터 손실이 발생한 경우, Glow 어플리케이션은 적시에 조사하기 위해 관련 기능 당국에 통보할 책임이 있습니다.",
		REGULATION_V_5_CONTENT_5:
			" Glow 어플리케이션에서 사용자 정보가 잘못된 경우, 해당 사용자가 Glow 어플리케이션에 게시한 모든 콘텐츠를 삭제할 것입니다.",
		REGULATION_V_5_CONTENT_6: " 다음과 같은 경우 사용자는 정보를 제공해야 합니다:",
		REGULATION_V_5_CONTENT_7: " - Glow 어플리케이션에 액세스, 주문, 서비스 사용;",
		REGULATION_V_5_CONTENT_8: " - 견적 요청, 정보 제공, 서비스 또는 지원;",
		REGULATION_V_5_CONTENT_9: " - 조사, 경품 대회 또는 기타 프로모션 및 광고 활동에 참여;",
		REGULATION_V_5_CONTENT_10: "- 뉴스 레터, 광고 이메일 또는 기타 유형의 뉴스 등록;",
		REGULATION_V_5_CONTENT_11: "- 채용 참가 등록, 지원서 제출, 이력서;",
		REGULATION_V_5_CONTENT_12:
			"- 사용자 정보의 수집 및 사용은 Glow 어플리케이션에 계정을 등록함으로써 사용자의 동의만으로 이루어질 수 있습니다.",
		REGULATION_V_6: "6. 개인 정보 또는 통지 범위 오용에 대한 불만 접수 메커니즘",
		REGULATION_V_6_CONTENT_1:
			"사용자의 개인 정보는 개인 정보 보호 정책에 따라 절대 기밀로 유지되며 사용자의 동의를 받기 전에는 사용자의 동의 없이 정보 수집 및 사용이 이루어지지 않습니다. 단, 법에 따른 규정이 있는 경우를 제외하고 말이죠.",
		REGULATION_V_6_CONTENT_2:
			"사용자는 회사 주소나 이메일( binh.do@glowvietnam.com)를 통해 비즈니스에 직접 또는 간접적으로 불만 사항을 전달할 수 있습니다.",
		REGULATION_V_6_CONTENT_3:
			"Glow의 고객 관리 부서는 사용자가 빠르게 비즈니스와 관련된 불만을 전달하는 데 지원할 것입니다.",
		REGULATION_V_6_CONTENT_4:
			"회사는 신고된 내용을 검증하기 위해 기술적 및 전문적인 조치를 채택할 책임이 있습니다. 개인 정보와 관련된 반영에 대한 처리 시간은 7일입니다.",
		REGULATION_VI: "VI. 사용자 권리 보호",
		REGULATION_VI_CONTENT_1:
			"Glow 플랫폼의 관리는 개인이 계정을 등록할 때 완전하고 관련된 개인 정보를 제공하도록 요구합니다. 이에는 전체 이름, 연락 주소, 이메일, 전화번호 등이 포함되며, 제공된 정보의 법적 정확성에 책임을 져야 합니다. 초기 등록 중에 사용자가 제공한 모든 개인 정보가 부정확한 경우, Glow 플랫폼의 관리는 사용자의 권리와 관련된 어떠한 불만도 처리하지 않으며 책임지지 않습니다.",
		REGULATION_VI_CONTENT_2:
			"사용자는 기술자가 제공한 서비스가 정확하지 않은 경우, 직접 불만 사항을 제기하고 보상을 요구할 수 있는 권리를 가지고 있습니다.",
		REGULATION_VI_CONTENT_3:
			"Glow 전자 상거래 플랫폼은 항상 서비스를 제공하는 기술자가 사용자에게 보상을 책임지도록 보장합니다. 이는 거래 충돌로 인해 사용자의 이익에 영향을 미치는 경우 사용자의 합법적 권리를 보호하기 위한 것입니다.",
		REGULATION_VII: "VII. 부정적 정보의 관리",
		REGULATION_VII_1: "1. 콘텐츠 통제",
		REGULATION_VII_1_CONTENT_1:
			" Glow 플랫폼의 콘텐츠는 사용자가 선택하기 위한 기술자 정보이므로, 기술자 정보는 정확하고 진실해야 합니다.",
		REGULATION_VII_1_CONTENT_2: " 구체적인 규정:",
		REGULATION_VII_1_CONTENT_3: " -언어: 게시물은 베트남어를 사용해야 합니다.",
		REGULATION_VII_1_CONTENT_4:
			" -이미지: 실제 사진을 권장하며, 최소 크기가 640x480 픽셀인 이미지 파일을 권장합니다. 업로드된 이미지는 선명하고 왜곡되지 않아야 합니다.",
		REGULATION_VII_1_CONTENT_5: " -가격: 가격은 베트남 동(VND)으로 제공되어야 합니다.",
		REGULATION_VII_1_CONTENT_6: " 금지된 행동:",
		REGULATION_VII_1_CONTENT_7: " - 도덕 기준 및 사회 윤리에 반하는 언어로 내용을 게시하는 것.",
		REGULATION_VII_1_CONTENT_8: " - 플랫폼에서 제공하는 스파, 마사지 서비스와 무관한 광고 게시",
		REGULATION_VII_1_CONTENT_9: " • 광고:",
		REGULATION_VII_1_CONTENT_10: "- 베트남의 역사적, 문화적, 윤리적 및 전통적 가치에 반하는 심미적이지 않은 광고.",
		REGULATION_VII_1_CONTENT_11: "- 조직 및 개인의 명예, 존엄성 및 인간 가치를 모욕하는 광고.",
		REGULATION_VII_1_CONTENT_12: "- 경쟁법에 따른 건전하지 않은 경쟁을 포함하는 광고.",
		REGULATION_VII_1_CONTENT_13: "- 지적 재산법을 위반하는 광고.",
		REGULATION_VII_2: "2. 공급업체 및 기술자의 통제:",
		REGULATION_VII_2_CONTENT_1: "a. 기술자/서비스 제공자가 되기 위한 절차 (위에서 설명한 내용)",
		REGULATION_VII_2_CONTENT_2: "단계 1: Glow의 약관과 정책에 동의합니다.",
		REGULATION_VII_2_CONTENT_3: "단계 2: 계정을 생성합니다.",
		REGULATION_VII_2_CONTENT_4: "단계 3: 관리부서가 기술자에게 계정을 제공합니다.",
		REGULATION_VII_2_CONTENT_5: "b. 공급업체/기술자에 대한 규정:",
		REGULATION_VII_2_CONTENT_6:
			"기술자는 완전한 정보를 제공해야 합니다: 이름, 주소, 전화번호, 이메일, Glow 플랫폼의 연락 정보.",
		REGULATION_VII_3: "3. 플랫폼에서 지적 재산권 소유자와의 협력 절차를 통한 위반 정보 검토 및 제거",
		REGULATION_VII_3_CONTENT_1: "단계 1: 플랫폼에서의 지적 재산권 침해에 관한 정보를 접수합니다.",
		REGULATION_VII_3_CONTENT_2: "단계 2: 정보를 확인하고 검토합니다.",
		REGULATION_VII_3_CONTENT_3: "단계 3: 보고된 지적 재산권 침해가 유효한지 여부를 확인합니다.",
		REGULATION_VII_3_CONTENT_4: "단계 4: 필요한 경우 해결 및 제거 방안을 제안합니다.",
		REGULATION_VII_3_CONTENT_5:
			"또한, 요청하는 당사자는 지적 재산권을 입증하는 문서를 제공해야 합니다(문서, 지식재산청과 같은 관련 기관의 확인).",
		REGULATION_VII_4: "4. 고객 및 기술자에 대한 위반 조치: ",
		REGULATION_VII_4_CONTENT_1:
			"사용자에 대해서는: 사용자 행동 위반에 대한 첫 번째 경고 (가짜 주소 제공, 주문 폭탄 투하, 주문 취소 여러 번 등). 플랫폼 관리부서는 사용자의 다른 거래에 대한 계정을 제한하거나 플랫폼 관리부서의 규정에 따른 다른 조치를 취할 수 있습니다.",
		REGULATION_VII_4_CONTENT_2:
			"기술자에 대해서는: 플랫폼 규정을 위반하는 서비스 정보를 게시하는 경우 (위에서 언급한 대로), 첫 번째 경고. 두 번째 경고로 인해 서비스 제공이 제한됩니다. 반복적인 위반 기술자의 계정은 영구적으로 차단되며, 파트너 지위와 특권이 박탈됩니다.",
		REGULATION_VII_4_CONTENT_3: "고객의 권리를 침해하는 행동 및 조치의 해결 (고객 서비스 사용자):",
		REGULATION_VII_4_CONTENT_4:
			"단계 1: 고객이 기술자의 서비스에 대한 불만을 이메일로 제기합니다: binh.do@glowvietnam.com. 고객은 BK VIETNAM TECHNOLOGY JOINT STOCK COMPANY의 관리에 직접 보고할 수도 있습니다.",
		REGULATION_VII_4_CONTENT_5:
			"단계 2: Glow의 고객 관리 부서는 고객(사용자)의 불만을 접수합니다. 불만의 성격과 심각성에 따라 Glow는 분쟁을 해결하기 위해 특정 조치를 취할 것입니다.",
		REGULATION_VII_4_CONTENT_6:
			"단계 3: 문제가 Glow의 능력과 관할 범위를 벗어나는 경우, 관리부서는 고객(사용자)에게 해당 사안을 법에 따라 해결하기 위해 관련 국가 기관에 제출하도록 요청할 것입니다.",
		REGULATION_VII_4_CONTENT_7: "고객은 불만 사항을 다음 주소로 보낼 수 있습니다:",
		REGULATION_VII_4_CONTENT_8: "BK VIETNAM TECHNOLOGY JOINT STOCK COMPANY",
		REGULATION_VII_4_CONTENT_9: "주소: 하노이시 카우짜이 구 트룽호아 동 169 번지, 호안 옥 미에우 성, 14 층, 베트남",
		REGULATION_VII_4_CONTENT_10: "전화: 0888129100",
		REGULATION_VII_4_CONTENT_11: "이메일: binh.do@glowvietnam.com",
		REGULATION_VII_4_CONTENT_12: "불만, 경고, 분쟁 규정:",
		REGULATION_VII_4_CONTENT_13: "모든 게시물은 다음 조건을 충족해야 하며, 그렇지 않을 경우 차단될 것입니다:",
		REGULATION_VII_4_CONTENT_14: "불만의 대상이 Glow 사용자여야 합니다.",
		REGULATION_VII_4_CONTENT_15: "사건은 Glow에서 사용자가 게시한 게시물과 관련되어야 합니다.",
		REGULATION_VII_4_CONTENT_16: "구체적인 증거가 제공되어야 합니다.",
		REGULATION_VII_4_CONTENT_17: "모욕적이거나 저속하거나 위협적인 언어를 사용할 수 없습니다.",
		REGULATION_VII_4_CONTENT_18: "불만은 구체적이고 명확한 증거와 함께 제출되어야 하며:",
		REGULATION_VII_4_CONTENT_19: "불만 제기자의 계정.",
		REGULATION_VII_4_CONTENT_20: "관련 지원 증거 링크",
		REGULATION_VII_4_CONTENT_21:
			"Glow는 고객 권리(사용자) 보호에 관한 법적 규정을 존중하고 엄격하게 준수합니다. 따라서 플랫폼에 게시되는 서비스 제공자는 서비스에 관련된 완전하고 정확하며 진실하고 자세한 정보를 제공해야 합니다. 어떠한 사기 또는 기만적인 사업 관행도 법률에 따라 비난받고 완전히 책임을 져야 합니다.",
		REGULATION_VII_4_CONTENT_22:
			"기술자와 고객은 문제를 적극적으로 해결하는 책임을 가지고 있습니다. 기술자는 분쟁에 관여하는 경우 고객에게 영향을 미치는 충돌적인 문제에 대한 정보를 인증하는 문서를 제공해야 합니다. Glow는 고객이나 분쟁 관련 당사자의 요청에 따라 고객 및 기술자와 관련된 정보를 제공하는 책임이 있습니다.",
		REGULATION_VII_4_CONTENT_23:
			"기술자와 고객이 분쟁을 해결한 후에는 Glow 관리부서에 통보해야 합니다. 기술자의 잘못으로 인한 거래 충돌이 발생하는 경우, 경고, 계정 중지 또는 심각한 위반에 따라 관련 법적 기관으로 사안을 이관할 것입니다. Glow는 해당 기술자의 모든 Glow에서 제공하는 서비스를 종료하고 제거하며, 고객과의 합의를 바탕으로 기술자에게 공정한 보상을 요청할 것입니다.",
		REGULATION_VII_4_CONTENT_24:
			"분쟁을 합의로 해결할 수 없는 경우에는 고객 또는 기술자가 모든 당사자의 합법적 이익, 특히 고객의 이익을 보장하기 위해 관할 법적 기관의 개입을 요청할 수 있습니다.",
		REGULATION_VIII: "VIII. 즉시 조치하는 기술적 오류의 경우의 책임",
		REGULATION_VIII_CONTENT_1:
			"Glow 전자 상거래 플랫폼은 전체 기술 시스템의 안전성과 안정성을 보장하기 위해 최선을 다하고 있습니다. 그러나 Glow의 오류로 인한 사고가 발생하는 경우, Glow는 즉시 조치를 취하여 사용자의 권리를 보호합니다.",
		REGULATION_VIII_CONTENT_2: "플랫폼에서 거래를 진행할 때 사용자는 제공된 절차를 준수해야 합니다.",
		REGULATION_VIII_CONTENT_3:
			"Glow 전자 상거래 플랫폼의 관리는 거래에 참여하는 사용자들을 위해 최상의 서비스 품질을 제공하는 것을 약속드립니다. 기술적 오류, 소프트웨어 오작동 또는 사용자가 거래에 참여하지 못하게 하는 기타 객관적 오류가 발생하는 경우, 사용자는 제공된 이메일 주소를 통해 Glow 전자 상거래 플랫폼 관리에게 알려야 합니다. 우리는 오류를 가능한 빨리 정정하여 사용자가 Glow 전자 상거래 플랫폼에서 거래를 진행할 수 있도록 돕겠습니다.",
		REGULATION_VIII_CONTENT_4:
			"그러나 Glow 전자 상거래 플랫폼의 관리는 기술적 오류, 연결 오류, 소프트웨어 오작동 또는 관리에서 발생하지 않은 기타 유형의 오류로 인해 발생하는 문제를 해결하는 책임을 지지 않습니다.",
		REGULATION_IX: "IX. Glow 전자 상거래 플랫폼 관리의 권리와 책임",
		REGULATION_IX_1: "1. Glow 전자 상거래 플랫폼 관리의 권리",
		REGULATION_IX_1_CONTENT_1:
			"- Glow 전자 상거래 플랫폼은 사용자가 플랫폼이 정한 필수 절차와 조건을 완료한 경우 서비스를 제공합니다.",
		REGULATION_IX_1_CONTENT_2:
			"- Glow 전자 상거래 플랫폼이 사용자가 Glow 전자 상거래 플랫폼에 부정확하거나 불완전하거나 법을 위반하는 정보를 제공한 증거가 있는 경우, 플랫폼은 사용자의 서비스 이용을 거부, 중단 또는 종료할 권리를 보유합니다.",
		REGULATION_IX_1_CONTENT_3:
			"- Glow 전자 상거래 플랫폼은 사용자가 Glow 전자 상거래 플랫폼의 규정을 위반하거나 플랫폼의 사업 운영에 영향을 미치는 활동을 할 경우, 사용자의 하나 또는 모든 서비스 이용 권리를 종료하고 통지 기간을 적어도 1 (01) 개월 동안 알립니다.",
		REGULATION_IX_1_CONTENT_4:
			"- Glow 전자 상거래 플랫폼은 사용자가 거래 활동에 참여하지 않거나 Glow 전자 상거래 플랫폼에서 세 달 동안 지속적으로 정보 교환을 하지 않는 경우 사용자의 서비스 이용과 권리 종료를 검토합니다. 사용자로서 계속하여 서비스를 이용하고 권리를 회복하려면 사용자는 Glow 전자 상거래 플랫폼의 템플릿과 절차를 따라 처음부터 다시 등록해야 합니다.",
		REGULATION_IX_1_CONTENT_5:
			"- Glow 전자 상거래 플랫폼은 플랫폼이 사용자가 파산한 것을 발견하거나 유죄 판결을 받은 것을 발견한 경우, 선고를 받거나 형을 선고받은 경우, 플랫폼에 법적 책임을 부과할 수 있는 활동을 계속하는 경우, 사기 행위, 가장, 시장 교란, 다른 Glow 전자 상거래 플랫폼 사용자들과의 융화를 해치거나 베트남의 현행 법률을 위반하는 활동을 하는 경우, 사용자의 서비스 이용과 권리를 즉시 종료할 권리를 보유합니다. 사용자 권리와 서비스 이용 권리가 종료되면 모든 인증서와 부여된 사용자 권리가 자동으로 만료되고 취소됩니다.",
		REGULATION_IX_1_CONTENT_6:
			"- Glow 전자 상거래 플랫폼은 베트남의 지적 재산 보호 법률에 따라 Glow 전자 상거래 플랫폼에서의 서비스와 콘텐츠를 이용하는 저작권을 보유합니다. 모든 기호와 다양한 언어의 콘텐츠는 Glow 전자 상거래 플랫폼의 재산입니다. 소유권 권리를 불법적으로 복사, 이용 및 배포하는 것은 엄격히 금지됩니다.",
		REGULATION_IX_1_CONTENT_7:
			"- Glow 전자 상거래 플랫폼은 서비스 이용 중에 서비스 가격표, 요율 및 결제 방법을 필요에 따라 플랫폼의 요구와 능력을 기반으로 변경할 권리를 보유하며 사용자에게 적어도 1 (01) 개월의 사전 통지를 제공합니다.",
		REGULATION_IX_2: "2. Glow 전자 상거래 플랫폼 관리의 의무와 책임",
		REGULATION_IX_2_CONTENT_1:
			" - Glow 전자 상거래 플랫폼은 Decree 52/2013/ND-CP 제36조 제4항에서 규정한 대로 '전자 상거래 거래 플랫폼 상의 공급자가 제공한 정보의 정확성과 완전성을 보장하기 위한 검증 및 모니터링 기구를 구축하고 시행하는 책임이 있습니다.",
		REGULATION_IX_2_CONTENT_2:
			" - Glow 전자 상거래 플랫폼은 전자 상거래 거래 플랫폼에서 법을 위반하는 사업 활동을 발견하거나 신고를 받을 때 신속하게 조치하는 책임이 있습니다.",
		REGULATION_IX_2_CONTENT_3:
			" - Glow 전자 상거래 플랫폼은 법에 위반하는 비즈니스 활동을 조사하는 국가 관리 기관을 지원하고 전자 상거래 거래 플랫폼 상에서 법을 위반하는 활동을 하는 엔티티에 관련된 등록 정보, 거래 이력 및 기타 문서를 제공하는 책임이 있습니다.",
		REGULATION_IX_2_CONTENT_4:
			" - Glow 전자 상거래 플랫폼은 전자 상거래 거래 플랫폼 상에서 거래 중에 발생하는 분쟁 해결 매커니즘을 공개하는 책임이 있습니다. 전자 상거래 거래 플랫폼 상에서 고객과 서비스 제공자 사이에 분쟁이 발생하거나 정당한 이익이 해치되는 경우 고객에게 서비스 제공자에 대한 정보를 제공해야 하며 고객이 정당한 권리와 이익을 보호하는 데 도움을 주는 데 적극적으로 협조해야 합니다.",
		REGULATION_IX_2_CONTENT_5: " - 플랫폼 관리는 부정확한 정보를 최대한으로 제거하기 위해 노력할 것입니다.",
		REGULATION_IX_2_CONTENT_6:
			" - 관리 측은 사용자, 구매 고객 및 판매 고객으로부터 피드백을 수렴할 의무가 있습니다.",
		REGULATION_IX_2_CONTENT_7:
			" - Glow 전자 상거래 플랫폼은 외국 무역 관행, 전자 상거래, 국내 및 국제 상업 법적 텍스트 시스템, 외국 시장 및 Glow 전자 상거래 플랫폼의 활동과 관련된 관련 뉴스에 대한 지식과 정보 체계를 구축 및 보완하는 책임이 있습니다.",
		REGULATION_IX_2_CONTENT_8:
			" - Glow 전자 상거래 플랫폼은 허용 범위 및 조건 내에서 외국 시장에 Glow 전자 상거래 플랫폼을 소개하기 위한 홍보 활동을 수행하며, Glow 전자 상거래 플랫폼에 참여하는 사용자의 해외 시장 개발 및 비즈니스 파트너 찾기 요구를 확장, 연결 및 충족시키는 데 기여할 것입니다.",
		REGULATION_IX_2_CONTENT_9: " ",
		REGULATION_IX_2_CONTENT_10:
			"- Glow 전자 상거래 플랫폼은 가능한 범위와 조건 내에서 Glow 전자 상거래 플랫폼의 정상 운영을 유지하고 기계 기술 장애, 소프트웨어 오류, 인터넷 연결 시스템, 인력, 사회 변동, 자연 재해, 정전, 국가 기관의 결정 또는 관련된 제3자 기관과 관련된 사고를 해결하기 위해 노력할 것입니다",
		REGULATION_IX_2_CONTENT_11:
			"- 그러나 이러한 사고가 통제를 벗어나 크고작음에 관계없이 강제적 사정에 해당하며 사용자에게 피해를 입힐 경우, Glow 전자 상거래 플랫폼은 공동 책임을 지지 않을 것입니다.",
		REGULATION_X: "X. 참여 당사자들의 권리와 책임 (Glow 전자 상거래 거래 플랫폼) ",
		REGULATION_X_1: "1.1. Glow 어플리케이션을 사용하는 파트너들 (기술자, 공급자)의 권리와 책임",
		REGULATION_X_1_CONTENT_1: " a. Glow 전자 상거래 거래 플랫폼에서의 기술자 권리",
		REGULATION_X_1_CONTENT_2:
			" - 기술자들은 Glow 전자 상거래 거래 플랫폼의 직원들로부터 도구 사용, 분류 광고 게시 또는 구매 기능 사용, 그리고 유틸리티 서비스 사용에 대한 지침을 제공받을 것입니다.",
		REGULATION_X_1_CONTENT_3:
			" - 기술자들은 운영 중인 Glow 전자 상거래 거래 플랫폼에 의견을 제공할 권리가 있습니다. 제안은 우편 또는 이메일을 통해 직접 Glow 전자 상거래 거래 플랫폼으로 보낼 수 있습니다.",
		REGULATION_X_1_CONTENT_4: " - 기술자들은 플랫폼에서 자신의 서비스에 대한 정확한 의견을 제공할 권리가 있습니다.",
		REGULATION_X_1_CONTENT_5: " b. Glow 전자 상거래 거래 플랫폼에서의 기술자 의무와 책임",
		REGULATION_X_1_CONTENT_6:
			" - 기술자들은 등록한 사용자명, 로그인, 비밀번호, 이메일을 사용하여 모든 활동을 안전하게 보관하고 관리하는 책임이 있습니다.",
		REGULATION_X_1_CONTENT_7:
			" - 기술자들은 무단, 남용, 보안 위반 사용 또는 등록 및 비밀번호 보존과 관련된 사항을 즉시 Glow 전자 상거래 거래 플랫폼에 통보하는 책임이 있으며 양측이 협력하여 처리해야 합니다.",
		REGULATION_X_1_CONTENT_8:
			" - 기술자들은 Glow 전자 상거래 거래 플랫폼에 제공한 정보와 플랫폼에 게시한 정보가 정확하다는 것을 확약합니다.",
		REGULATION_X_1_CONTENT_9:
			" - 기술자들은 개인 정보의 내용, 이미지 및 기타 정보, 그리고 Glow 전자 상거래 거래 플랫폼 상의 파트너들과의 모든 거래 과정에 대한 책임이 있습니다.",
		REGULATION_X_1_CONTENT_10:
			"- 기술자들은 고객과 판매자 간에 발생하는 분쟁을 해결하는 데 도움을 주기 위해 거래 지원에 관한 정보를 Glow 전자 상거래 거래 플랫폼에 제공하는 책임이 있습니다.",
		REGULATION_X_1_CONTENT_11:
			"- 기술자들은 고객이 오류가 기술자에게 속한다는 것을 증명할 수 있는 경우 고객에 대한 손해 배상에 책임이 있습니다.",
		REGULATION_X_1_CONTENT_12:
			"- 기술자들은 불법, 사기, 위협적, 불법 정보 수집, 파괴, 시스템 손상을 초래하는 바이러스 생성 및 배포, 또는 추측적 목적으로 서비스를 사용하는 것을 포함하여 Glow 전자 상거래 거래 플랫폼의 서비스를 사용하지 않을 것을 확약하고 동의합니다. 위반 시 사용자들은 법에 따라 행동에 대한 책임이 있습니다.",
		REGULATION_X_1_CONTENT_13:
			"- 기술자들은 이 규정에 따라 Glow 전자 상거래 거래 플랫폼이 제공하는 서비스와 유사한 도구를 제3자에게 동의 없이 수정, 변경, 복사, 전송, 배포, 제공 및 생성하지 않을 것을 확약합니다.",
		REGULATION_X_1_CONTENT_14:
			"- 기술자들은 Glow 전자 상거래 거래 플랫폼의 평판을 해치는 행동, 보조 등록명 또는 제3자 등록명을 사용하여 사용자들 사이의 연대를 약화시키는 행동, 또는 Glow 전자 상거래 거래 플랫폼의 평판에 해를 끼치는 정보를 확산시키는 행동을 하지 않을 것을 확약합니다.",
		REGULATION_X_1_CONTENT_15:
			"- 기술자들은 법에 따라 권한이 부여된 국가 기관에 의해 요청될 경우 전자 상거래 통계를 위한 비즈니스 상황에 관한 정보를 제공하는 의무가 있으며 전자 상거래 거래 플랫폼에서 서비스를 제공할 때 지불, 광고, 프로모션, 지적 재산 보호, 소비자 보호 및 기타 관련 규정을 준수해야 합니다.",
		REGULATION_X_1_CONTENT_16:
			"- 기술자들과 고객들은 민감한, 도발적인 행동 및 법을 위반하는 행위에 참여할 때 베트남의 법규를 따를 책임이 있습니다. Glow 전자 상거래 거래 플랫폼은 기술자에 대한 고객의 행동, 고객에 대한 기술자의 행동에 대한 책임에서 면제됩니다. 소송, 분쟁의 경우 고객과 파트너들은 서로 직접 협력하며, 관련 권한이 요청하는 경우 Glow 전자 상거래 거래 플랫폼은 필요한 정보를 제공할 것입니다.",
		REGULATION_X_2: "1.2. Glow에 참여하는 사용자들 (개인, 서비스 이용자)의 권리와 책임",
		REGULATION_X_2_CONTENT_0: " a. Glow 전자 상거래 거래 플랫폼에 참여하는 고객들의 권리",
		REGULATION_X_2_CONTENT_1:
			" - 사용자로 등록 후 고객들은 Glow 시스템 내에서 혜택을 누리기 위해 계정을 생성할 것입니다.",
		REGULATION_X_2_CONTENT_2:
			" - 고객들은 서비스를 사용하고 계정을 관리하며 Glow 시스템 내에서의 혜택 사용 기록을 보유할 수 있도록 고유한 등록 사용자명과 비밀번호를 제공받게 될 것입니다.",
		REGULATION_X_2_CONTENT_3:
			" - 고객들은 Glow 전자 상거래 거래 플랫폼 또는 플랫폼의 제3자 파트너들이 제공하는 우대 정책을 누릴 수 있습니다. 이러한 우대 정책은 Glow 전자 상거래 거래 플랫폼에서 해결될 것이며 (있는 경우) 직접 Glow 전자 상거래 거래 플랫폼 어플리케이션에 게시되거나 고객에게 직접 전송될 것입니다.",
		REGULATION_X_2_CONTENT_4:
			" - 고객들은 운영 중인 Glow 전자 상거래 거래 플랫폼에 의견을 기여할 권리가 있습니다. 제안은 우편 또는 이메일을 통해 직접 Glow 어플리케이션으로 보낼 수 있습니다.",
		REGULATION_X_2_CONTENT_5:
			" - 고객들은 기술자가 약속한 품질을 충족하지 못하는 서비스의 경우 직접 불만 및 보상 요청을 Glow에 보낼 권리가 있습니다.",
		REGULATION_X_2_CONTENT_6: " b. Glow 전자 상거래 거래 플랫폼에 참여하는 고객들의 책임",
		REGULATION_X_2_CONTENT_7:
			" - 고객들은 등록한 사용자명, 비밀번호 및 이메일을 사용하여 서비스를 이용하는 모든 활동을 안전하게 보관하고 관리하는 책임이 있습니다.",
		REGULATION_X_2_CONTENT_8:
			" - 고객들과 기술자들은 민감한, 도발적인 행동 및 법을 위반하는 행위에 참여할 때 베트남의 법규를 따를 책임이 있습니다. Glow 전자 상거래 거래 플랫폼은 기술자에 대한 고객의 행동, 고객에 대한 기술자의 행동에 대한 책임에서 면제됩니다. 소송, 분쟁의 경우 고객과 기술자들은 서로 직접 협력하며, 관련 권한이 요청하는 경우 Glow 전자 상거래 거래 플랫폼은 필요한 정보를 제공할 것입니다.",
		REGULATION_X_2_CONTENT_9:
			" - 고객들은 무단, 남용, 보안 위반 사용 또는 등록한 사용자명과 비밀번호의 보존과 관련된 사항을 즉시 Glow 어플리케이션에 통보하는 책임이 있으며 양측이 협력하여 처리해야 합니다.",
		REGULATION_X_2_CONTENT_10:
			"- 고객들은 Glow 전자 상거래 거래 플랫폼에 제공한 정보와 플랫폼에 업로드한 정보가 정확하다는 것을 확약합니다.",
		REGULATION_X_2_CONTENT_11:
			"- 고객들은 거래 지원에 관한 정보를 제공하여 플랫폼 내에서 고객과 기술자 간에 발생하는 분쟁을 해결하기 위해 Glow 전자 상거래 거래 플랫폼에 정보를 제공하는 책임이 있습니다.",
		REGULATION_X_2_CONTENT_12:
			"- 고객들은 불법, 불합리, 사기적, 위협적, 불법 정보 수집, 파괴, 시스템 손상을 초래하는 바이러스 생성 및 배포, 또는 추측적 목적으로 서비스를 사용하지 않을 것을 확약하고 동의합니다. 위반 시 사용자들은 법에 따라 행동에 대한 책임이 있습니다.",
		REGULATION_X_2_CONTENT_13:
			"- 고객들은 이 규정에 따라 Glow 전자 상거래 거래 플랫폼이 제공하는 서비스와 유사한 도구를 제3자에게 동의 없이 수정, 변경, 복사, 전송, 배포, 제공 및 생성하지 않을 것을 확약합니다.",
		REGULATION_X_2_CONTENT_14:
			"- 고객들은 보조 등록명을 사용하여 사용자들 사이의 연대를 약화시키는 행동, 제3자 등록명을 통해 사용자들 사이의 연대를 약화시키는 행동, 또는 Glow 전자 상거래 거래 플랫폼의 평판에 해를 끼치는 정보를 확산시키는 행동과 같은 모든 형태의 행동을 하지 않을 것을 확약합니다.",
		REGULATION_XI: "XI. 적용 규정",
		REGULATION_XI_CONTENT_1:
			"Glow 전자 상거래 거래 플랫폼의 규정은 본 규정과 함께 서명된 결정의 발효일부터 공식적으로 적용됩니다. Glow 전자 상거래 거래 플랫폼은 본 규정을 변경할 권리가 있으며, 변경 내용을 Glow 전자 상거래 거래 플랫폼 사용자들에게 통지함으로써 변경된 규정을 시행할 수 있습니다. 사용자들이 개정된 규정이 발표되고 시행된 후에도 계속해서 서비스를 사용하는 경우, 사용자들은 이러한 개정 조항을 수락한 것으로 간주됩니다.",
		REGULATION_XI_CONTENT_2:
			"운영 규정은 구현 전에 Glow에서 지속적으로 업데이트되며 발표될 것입니다. 규정은 변경 사항 통지 후 5 영업일 후에 시행될 것입니다. Glow에 참여하는 사용자들은 웹사이트에서 거래를 할 때 현재 규정을 준수하는 책임이 있습니다.",
		REGULATION_XII: "XII. 약정 조항",
		REGULATION_XII_CONTENT_1:
			"Glow를 사용하여 온라인 거래하는 모든 사용자들과 파트너/기술자들은 관련 당사자들이 본 규정을 준수하기로 동의한 것으로 간주됩니다. 고객 문의 사항은 아래의 정보를 사용하여 Glow에 문의하시기 바랍니다.",
		REGULATION_XII_CONTENT_2: "고객 지원",
		REGULATION_XII_CONTENT_3: "Glow 전자 상거래 거래 플랫폼",
		REGULATION_XII_CONTENT_4: "• 주소: 베트남 하노이시 카우지이 지구 트룽호아 동 169 Nguyen Ngoc Vu 14층",
		REGULATION_XII_CONTENT_5: "• 전화: 0888129100",
		REGULATION_XII_CONTENT_6: "이메일: binh.do@glowvietnam.com",
		REGULATION_XII_CONTENT_7: "회사 대표자 (서명, 인감)",

		HOME_PAGEV2_TITLE: "Glow - 온디맨드 서비스 예약 플랫폼",
		HOME_PAGEV2_SERVICE: "가정에서 예약하는 방법:",
		HOME_PAGEV2_SERVICE_CONTEN_1: '단계 1: "집에서 스파" 카테고리를 선택하세요',
		HOME_PAGEV2_SERVICE_CONTEN_2: "2단계: 치료사 선택",
		HOME_PAGEV2_SERVICE_CONTEN_3: "단계 3: 치료사가 집에서 서비스를 제공하러 올 것입니다",
		HOME_PAGEV2_SERVICE_CONTEN_4: "",
		HOME_PAGEV2_SERVICE_CONTEN_5: "",
		HOME_PAGEV2_SERVICE_CONTEN_6: "",
		HOME_PAGEV2_SERVICE_CONTEN_7: "",
		HOME_PAGEV2__SPA_3STEP: "스파 예약하기:",
		HOME_PAGEV2__SPA_3STEP_CONTENT_1: "단계 1: 할인된 요금을 제공하는 근처 스파를 확인하세요.",
		HOME_PAGEV2__SPA_3STEP_CONTENT_2: "단계 2: 스파와 적절한 서비스를 선택하세요.",
		HOME_PAGEV2__SPA_3STEP_CONTENT_3: "단계 3: 스파로 이동하여 서비스를 즐기세요.",
		HOME_PAGEV2_TL: "집에서 받는 서비스 예약",
		HOME_PAGEV2_TL_CT: "마사지, 메이크업, 네일, 왁싱, 운전사, 조수, 가사 도우미",
		HOME_PAGEV2_GC: "신뢰할 수 있는 장소 찾기",
		HOME_PAGEV2_GC_CT: "스파, 미용 클리닉, 병원",
		HOME_PAGEV2_CL: "품질 보증",
		HOME_PAGEV2_CL_CT: "투명한 리뷰, 명확하게 검증된 인증서",
		HOME_PAGEV2_DOWNLOAD: "앱 다운로드",

		HOME_PAGEV2_FOOTER: "Glow - 온디맨드 서비스 예약 플랫폼",

		HOME_PAGE_IMAGE_PHONE: "./static/img/TrangchuwebsiteKR.jpg",

		ALT_MENU_LOGO: "Glow 심벌 마크",
		ALT_MENU_LOGO_RES: "Glow의 영어 옵션",
		ALT_IMG_BCT: "Glow는 산업통상자원부에 등록되었습니다.",
		ALT_GLOW_FAGE_FACE: "Glow페이스북 팬페이지",
		ALT_GLOW_FAGE_INSTA: "Glow인스타그램 팬페이지",
		ALT_GLOW_FAGE_TIKTOK: "Glow의 틱톡 채널",
		ALT_GLOW_FAGE_LINK: "Glow의 LinkedIn 채널",
		ALT_GLOW_FAGE_YOUTUBE: "Glow의 Youtube 채널 ",
		ALT_GLOW_FAGE_TWITTER: "Glow의 Twitter 채널 ",
		ALT_GLOW_FAGE_ZALO: "Glow의 zalo 채널",
		ALT_GLOW_FAGE_KKT: "Glow의 kakatask 채널",
		ALT_GLOW_FAGE_LINE: "Glow의 Line 채널",
		ALT_GLOW_HOME_PAGE: "Glow 홈 마사지 애플리케이션 홈페이지",
		ALT_GLOW_BOOK_HOME: "Glow 앱에서 집에서 마사지를 예약하는 단계",
		ALT_GLOW_BOOK_APP: "Glow 앱에서 스파 예약을 예약하는 단계",
		ALT_GLOW_TL: "Glow는 고객에게 편리함을 제공합니다",
		ALT_GLOW_RR: "Glow 앱에 가격이 명시되어 있습니다",
		ALT_GLOW_DG: "Glow 애플리케이션에서 품질이 명확하게 평가됩니다",
		ALT_GLOW_DOWNLOAD_GLOW_STORE: "App Store에서 Glow 앱을 다운로드할 수 있는 링크",
		ALT_GLOW_DOWNLOAD_GLOW_GG_PLAY: "Google Play에서 Glow 앱을 다운로드할 수 있는 링크",
		ALT_GLOW_DOWNLOAD_GLOW_RES: "Google Play 및 Apple Store에서 Glow 앱을 다운로드할 수 있는 링크",

		ALT_IMG_ABOUT_1: "Glow 앱으로 집에서 마사지하기",
		ALT_IMG_ABOUT_2: "Glow 앱으로 집에서 메이크업하기",
		ALT_IMG_ABOUT_3: "Glow 앱으로 집에서 네일을 해보세요",

		ALT_IMG_PARTNER_1: "Glow 홈 마사지 기술자",
		ALT_IMG_PARTNER_2: "Glow는 파트너와 기술자가 집에서 마사지할 때 사용하도록 권장하는 재료",
		ALT_IMG_PARTNER_3:
			'Glow 파트너로 등록하는 방법에 대한 지침이 있는 "파트너 되기" 버튼이 포함된 Glow 앱 홈페이지 이미지',

		ALT_IMG_PARTNER_DL_IOS_QR: "App Store에서 Glow 애플리케이션을 다운로드하기 위한 QR 코드",
		ALT_IMG_PARTNER_DL_ADR_QR: "Google Play에서 Glow 애플리케이션을 다운로드하기 위한 QR 코드",
		ALT_IMG_PARTNER_DL_IOS: "App Store에서 Glow 앱을 다운로드할 수 있는 링크	",
		ALT_IMG_PARTNER_DL_ADR: "Google Play에서 Glow 앱을 다운로드할 수 있는 링크",

		ALT_IMG_BANNER_BLOG: "Glow의 블로그는 건강 관리 및 뷰티 지식을 공유하는 데 사용됩니다",
		MASSAGE_AT_HOME: "홈 마사지",
		MASSAGE_LOCATION: "마사지 위치",
		HEADER_SPA_AT_HOME: "재택 서비스",
		SEE_ALL: "모두 보기",
		FILTERS: "필터",
		FILTERS_CITY: "도시",
		FILTERS_GENDER: "성별",
		FILTERS_PRICE: "가격",
		FILTERS_REVIEWS: "리뷰",
		DESCRIPTION: "설명",

		DEAL_HOT: "⚡ 뜨거운 거래",
		ALL: "모두",
		BOOK_NOW: "지금 예약",
		DISTRICT: "지구",
		MALE: "남성",
		FEMALE: "여성",
		UNDER300000: "300.000đ 미만",
		ABOVE1000000: "1.000.000đ 이상",

		FILTERS_BY_DISTRICT: "구역별 필터",
		FILTERS_BY_CITY: "도별 필터",
		FILTERS_BY_GENDER: "성별 필터",
		FILTERS_BY_PRICE: "가격별 필터",
		FILTERS_BY_REVIEWS: "평가별 필터",

		NO_PARTNERS_AVAILABLE_YET: "아직 파트너사 없음",
		AT_HOME: "집에서",
		DEAL_HOT_V2: "뜨거운 거래",
		WARD: "구",

		NEW_PAGE_CASHBACK: "환불",
		NEW_PAGE_COLLECT_VOUCHER: "바우처 받기",
		NEW_PAGE_TAP_TO_RATE: "평가하려면 탭하세요",
		NEW_PAGE_NO_REVIEWS: "아직 리뷰가 없습니다",
		NEW_PAGE_SERVICE_DESCRIPTION: "서비스 설명",
		NEW_PAGE_PRESSING_COLLECT_VOUCHER: "바우처 받기를 누르면 바우처 코드가 발급됩니다.",
		NEW_PAGE_EXPIRATION_DATE: "만료일",
		NEW_PAGE_REFUND_GLOW_BALANCE: "서비스 이용 후에는 Glow가 귀하의 Glow 잔액으로 환불됩니다",
		NEW_PAGE_CUSTOMER_REVIEWS: "고객 리뷰",
		FILTERS_BY_WARD: "필터링: 동/읍",
		NEW_PAGE_SEE_MORE: "더보기",
		NEW_PAGE_GLOW_WILL_CASHBACK: "Glow에서 캐시백합니다",

		FOOTER_CONTENT_SEO:
			"Glow는 베트남 전역에서 최고의 거래를 제공하는 마사지, 스파, 미용 및 건강 관리 서비스를 예약할 수 있는 환상적인 플랫폼입니다! Glow 앱을 통해 매 거래 후 캐시백 혜택과 함께 전국 5,000여 개의 최고의 스파, 미용실 및 클리닉에서 할인된 혜택을 탐색해보세요!",
		FOOTER_CONTENT_SEO2: "Glow는 독특한 홈 서비스 경험을 제공합니다.",
		FOOTER_CONTENT_SEO3:
			"언제 어디서나 홈 마사지! Glow는 하노이, 호치민시, 다낭에서 단 5분 만에 홈 마사지 서비스를 제공합니다. 홈 마사지 뿐만 아니라 Glow는 홈에서 귀지 제거, 메이크업, 네일 케어, 제모 등 다양한 서비스도 제공합니다. 긴 하루 일한 후에도 편안한 집에서 휴식을 즐기세요.",
		FOOTER_CONTENT_SEO4: "Glow의 추천 프로그램으로 커미션을 벌어보세요.",
		FOOTER_CONTENT_SEO5:
			"추천인은 친구에게 초대 코드를 공유하고, 그 결과로 추천인이 Glow 앱에서 서비스를 사용할 때마다 50%의 커미션을 받습니다. Glow 앱에서 공유하기만 하면 밤잠을 자도 평생 50%의 커미션을 받을 수 있습니다.",
		FOOTER_CONTENT_SEO6: "지금 Glow 앱을 설치하세요!",
		FOOTER_CONTENT_SEO7:
			"iOS 및 Android에서 10,000명 이상의 Glow 사용자가 신뢰하는 독점 거래로 마사지, 스파 및 미용 클리닉을 예약할 수 있는 Glow의 매력을 발견하세요! 최고의 스파와 미용 클리닉에서 휴식을 즐기세요. Glow는 집에서도 원하는 때마다 흥미로운 마사지를 즐길 수 있는 홈 마사지 서비스를 제공합니다. Glow의 전문가 홈 마사지 테라피스트는 하노이, 호치민시, 다낭에서 5분 만에 예약할 수 있습니다.",
		FOOTER_CONTENT_SEO8: `Glow에서 안전하고 저렴한 거래를 탐색하며 마사지, 스파, 미용 클리닉, 건강 관리 등 모든 서비스를 제공하여 편안함을 느낄 것입니다. Glow 앱에서 편리한 "내 주변" 기능을 사용하여 주변 시설을 쉽게 찾아 예약을 쉽게 할 수 있습니다. 매일의 대규모 할인과 새로운 사용자를 위한 Glow의 독점 할인을 놓치지 마세요. 오늘 Glow에 가입하여 다른 어떤 경험도 느껴보지 못한 색다른 경험을 즐겨보세요!`,

		LOGIN_SUPPORT: "지원하다",
		LOGIN_ORDER: "내 주문",
		LOGIN_LOG_OUT: "로그아웃",
		LOGIN_LOG_IN: "로그인",
		LOGIN_LOG_IN_RESGISTER: "로그인 / 등록",
		LOGIN_ADD_IMAGE: "이미지 추가",
		LOGIN_SELECT_SERVICE: "서비스 선택",
		LOGIN_REVIEW_SUCCESS: "리뷰를 성공적으로 제출했습니다",
		LOGIN_SUCCESS_VOUCHER: "성공적으로 쿠폰을 받았습니다",
		LOGIN_YOUR_WILL_CASHBACK: "Glow가 환불될 것입니다",
		LOGIN_VOUCHER_DETAIL: "바우처 세부사항",
		LOGIN_VIEW_VOUCHER_DETAIL: "쿠폰 세부 정보 보기",
		LOGIN_READ_REVIEW: "리뷰 작성",
		LOGIN_CONFIRME: "확인됨",
		LOGIN_PLEAL_CONTACT: "방문하기 전에 예약을 하기 위해 가게에 연락하세요",
		LOGIN_VOUCHER_CODE: "바우처 코드",
		LOGIN_CODE_GLOW_CASHBACK: "Glow가 를 캐시백하기 위해, 상점에 코드를 제공하여 스캔해주세요 😊",
		LOGIN_ENTER_SDT:
			"로그인에 사용하는 전화번호와 비밀번호를 입력하거나 Glow를 처음 사용하는 경우 계정을 만드십시오.",
		LOGIN_YOUR_PHONE_NUMBER: "전화번호를 입력하세요",
		LOGIN_FORGOT_PASSWORD: "비밀번호를 잊으셨나요",
		LOGIN_CONTINUE: "계속",
		LOGIN_ENTER_YOUR_PASSWORD: "비밀번호 입력",
		LOGIN_SDT_LOGIN: "전화번호",
		LOGIN_ENTER_PASSWORD: "비밀번호를 입력하세요",
		LOGIN_OTP_SDT: "OTP 확인 코드가 전화번호로 전송되었습니다.",
		LOGIN_VERIFICATION_SDT: "전화번호 확인 성공",
		LOGIN_RE_SEND_SMS: "SMS 다시 보내기",
		LOGIN_PASSWORD_SIX: "적어도 6자 이상의 비밀번호를 입력하세요",
		LOGIN_CREATED_PASSWORD: "비밀번호 생성",
		LOGIN_REGISTER_SUCCESS: "계정 등록 성공",
		LOGIN_INFO: "개인 정보",
		LOGIN_HELP_GLOW: "Glow가 당신을 더 잘 이해할 수 있도록 도와주세요!",
		LOGIN_SELECT_GENDER: "성별 선택",
		LOGIN_COUNTRY: "국적",
		LOGIN_SAVE: "저장",
		LOGIN_INFO_CALL: "연락처 정보",
		LOGIN_ONLY: "만",
		LOGIN_ENTER_REVIEW: "리뷰를 입력하세요",
		LOGIN_VOUCHER: "바우처",
		LOGIN_USED: "사용함",
		LOGIN_EXPIRED: "만료됨",

		SUGGESTIONS: "당신을 위한 제안",
		GLOW_NO_1: "Glow - 베트남 1위 홈 마사지 예약 앱",
		GLOW_NO_1_BACKGROUND: "./static/img/TainhawebsiteKR.png",

		YOUR_PHONE_NUMBER: "귀하의 전화번호는 무엇인가요?",
		PHONE_NUMBER_TO_LOG_OR_SIGN_UP: "처음으로 Glow를 사용하는 경우 로그인 또는 계정 생성에 사용된 전화 번호입니다.",
		APARTMENT: "아파트 / 건물",
		DOWNLOAD_GLOW_APP_APPOINTMENT: "지금 Glow 앱을 다운로드하여 예약하세요",

		AGREE_LAW: "앱에 로그인함으로써 귀하는 우리의 운영 규정, 이용 약관 및 정책에 동의하게 됩니다",
		TITLE_PAGE_HOME_NEW_SERVICE: "스파, 뷰티 바우처",
		LOCATION: "위치",
		SPA_BEAUTY_CLINIC: "스파, 뷰티 클리닉, 클리닉",
		DETAILS: "세부 내용",
		CONTACT_PHONE_NUMBER: "상담 및 예약 문의:",
		LIST_OF_THERAPISTS: "테라피스트 목록",
		DOWNLOAD_SEE_MORE_OFFERS: "Glow 앱을 다운로드하여 더 많은 혜택을 확인하세요",
		THERAPISTS: "테라피스트",
		THERAPISTS_NEAR_ME: "내 주변 테라피스트",
		SEARCH_RESULTS: "검색 결과:",
		NO_DATA: "정보가 없습니다",
		NO_RESULTS: "결과를 찾을 수 없습니다",
		SEARCH: "검색",
		MENU_APP_DOWNLOAD_BUTTON: "앱을 사용하세요",
		MENU_APP_DOWNLOAD_TITLE: "Glow - 홈 마사지",
		MENU_APP_DOWNLOAD_CONTENT: "가장 쉬운 예약 방법",
		SERVICE_DES: "서비스 설명",
	},
};

export function useLanguage() {
	const defaultLang = "vi";
	const { lang } = useParams<{ lang: string }>();
	const [selectedLang, setSelectedLang] = useState(lang || defaultLang);

	useEffect(() => {
		setSelectedLang(lang || defaultLang);
	}, [lang]);

	const languageOptions = [
		{ code: "vi", name: "Tiếng Việt", img: "./static/img/FlagVN.png", imgRes: "./static/img/FlaVN.png" },
		{ code: "en", name: "English", img: "./static/img/FlagEN.png", imgRes: "./static/img/FlaEN.png" },
		{ code: "kr", name: "한국어", img: "./static/img/FlagKR.png", imgRes: "./static/img/FlaKr.png" },
	];

	const onLangChange = (value: any) => {
		setSelectedLang(value);
	};

	return { lang: selectedLang || "vi", setLang: onLangChange, languageOptions };
}
