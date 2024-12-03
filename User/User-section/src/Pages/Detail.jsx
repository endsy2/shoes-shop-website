import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import DetailPic from '../Section/Detail/Detail';
import ShoesCard from '../Components/ShoesCard';
import { productCart } from '../Constants';

const Detail = () => {
    const { param } = useParams();
    const navigate = useNavigate();
    const [detail, setDetail] = useState(null);

    useEffect(() => {
        const productId = parseInt(param, 10);
        const findDetail2 = productCart.filter(product => product.id === productId);

        if (findDetail2.length > 0) {
            setDetail(findDetail2[0]);
        } else {
            // Navigate to another page if the product is not found
            navigate('/');
        }
    }, [param, navigate]);

    return (
        <main>
            <section className='flex gap-16 mt-10 mx-10'>
                {detail ? <DetailPic detail={detail} /> : <p>Loading...</p>}
            </section>
            <ShoesCard shoesData={productCart} />
        </main>
    );
};

export default Detail;
