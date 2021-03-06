USE [MyDB]
GO
/****** Object:  Table [dbo].[Menu]    Script Date: 09/05/2020 3:20:17 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Menu](
	[id] [nchar](10) NOT NULL,
	[ten_san_pham] [nvarchar](250) NOT NULL,
	[gia_ca] [float] NOT NULL,
 CONSTRAINT [PK_Menu] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
INSERT [dbo].[Menu] ([id], [ten_san_pham], [gia_ca]) VALUES (N'1         ', N'CaCao', 1000)
INSERT [dbo].[Menu] ([id], [ten_san_pham], [gia_ca]) VALUES (N'2         ', N'Kem', 2000)
INSERT [dbo].[Menu] ([id], [ten_san_pham], [gia_ca]) VALUES (N'3         ', N'Trà Sữa', 5000)
INSERT [dbo].[Menu] ([id], [ten_san_pham], [gia_ca]) VALUES (N'4         ', N'Tea', 3500)
