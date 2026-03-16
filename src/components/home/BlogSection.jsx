import {Col, Container, Row } from 'react-bootstrap';
import {Link, useNavigate} from 'react-router-dom';
import Spacer from '../../helper/Spacer';

const BlogSection = () => {

    const navigate = useNavigate();

    const data = [
        {
            link: '#',
            img: 'https://wordpressthemes.live/WCG10/WCM231_cosmika/cosmetic02/wp-content/uploads/2023/01/blog-18.jpg',
            desc: 'How to Write a Blog Post Your Readers Will Love in 5 Steps'
        },
        {
            link: '#',
            img: 'https://wordpressthemes.live/WCG10/WCM231_cosmika/cosmetic02/wp-content/uploads/2023/01/blog-16.jpg',
            desc: 'The Ultimate Guide to Marketing Strategies to Improve Sales'
        },
        {
            link: '#',
            img: 'https://wordpressthemes.live/WCG10/WCM231_cosmika/cosmetic02/wp-content/uploads/2023/01/blog-17.jpg',
            desc: '9 Content Marketing Trends and Ideas to Increase Traffic'
        },
        {
            link: '#',
            img: 'https://wordpressthemes.live/WCG10/WCM231_cosmika/cosmetic02/wp-content/uploads/2023/01/blog-15.jpg',
            desc: '50 Best Sales Questions to Determine Your Customer\'s Needs'
        }
    ]
    return (
        <Container className='py-5'>
            <Row>
                <Col xs={12} className='py-5 article-title'>
                    <h6 className='text-center'>FROSTY DEALS</h6>
                    <Spacer size={8} />
                    <h1 className='text-center'>OUR LATEST NEWS</h1>
                </Col>
            </Row>
            <Row>
                {
                    data.map((item, index) => {
                        return (
                            <Col xs={6} className='mb-4' key={index.toString()}>
                                <Link to='#' className='article-card'>
                                    <Col className='img-zoom'>
                                        <img src={item['img']} alt="img" />
                                    </Col>
                                    <Col className='article-content'>
                                        <ul className='d-flex gap-3'>
                                            <li>February 9, 2024</li>
                                            <li>by  Editor</li>
                                        </ul>
                                        <p className='m-0'>{item['desc']}</p>
                                        <span className='ancor' onClick={() => navigate('/')}>Learn more</span>
                                    </Col>
                                </Link>
                            </Col>
                        )
                    })
                }
            </Row>
        </Container>
    );
};

export default BlogSection;