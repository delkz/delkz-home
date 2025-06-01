
import { PortfolioItem } from "@/types";
import Image from "next/image";
import { Dispatch, SetStateAction, useRef } from "react";
import PortfolioCardTag from "./portfolio-card-tag";
import { useLocale } from 'next-intl';
import LayoutButton from "./layout-button";

interface PortfolioModalProps {
    modalController: {
        isModalOpen: boolean,
        setIsModalOpen: Dispatch<SetStateAction<boolean>>
    };
    item: PortfolioItem
}


const PortfolioModal = ({ item, modalController }: PortfolioModalProps) => {

    const locale = useLocale();

    const modalRef = useRef<HTMLDivElement>(null);
    const { isModalOpen, setIsModalOpen } = modalController;

    function closeModal() {
        setIsModalOpen(false);
    }

    if (!isModalOpen) return null;

    const description = item?.description?.[locale] ?? item.description?.['en'] ?? 'Descrição indisponível';
    const backButtonText = locale === 'pt' ? 'Voltar' : 'Back';
    const viewProjectText = locale === 'pt' ? 'Ver Projeto' : 'View Project';

    return (
        <div ref={modalRef} className="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 flex items-center justify-center z-[999]">
            <div className="container mx-auto px-4 py-8 bg-white rounded-lg shadow-lg">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                        <Image width={600} height={300} loading="lazy" src={item.image} alt={item.title}
                            className="w-full h-auto rounded-lg max-h-[350px] object-cover object-top"
                        />
                    </div>
                    <div>
                        <h2 className="text-2xl font-bold mb-4">{item.title}</h2>

                        {item?.tags && <ul className="flex gap-5 flex-wrap mb-5"><PortfolioCardTag tags={item.tags} /></ul>}

                        <p className="mb-4" dangerouslySetInnerHTML={{ __html: description }}>
                        </p>

                        <div className="flex flex-col md:flex-row gap-2">
                            <LayoutButton type="link"
                                href={item.link}
                                title={item.title} >
                                {viewProjectText}
                            </LayoutButton>
                            <LayoutButton
                                type="button"
                                onClick={closeModal}
                            >{backButtonText}
                            </LayoutButton>
                        </div>


                    </div>
                </div>


            </div>
        </div>
    )

};

export default PortfolioModal;
