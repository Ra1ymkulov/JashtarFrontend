import { DetailNews } from "@/src/pages/news/detailNews/DetailNews";

interface Props {
	params: Promise<{ id: string }>; // Указываем, что это Promise
}

// Добавляем async
const page = async ({ params }: Props) => {
	const resolvedParams = await params; // Дожидаемся получения параметров

	return <DetailNews id={resolvedParams.id} />;
};

export default page;
