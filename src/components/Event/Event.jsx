import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const Event = () => {
  return (
    <div className="w-full py-8 bg-zinc-900">
      <h1 className="text-4xl font-semibold text-white text-center">Event</h1>
      <div className="w-full py-6 px-20">
        <Swiper
          spaceBetween={30}
          slidesPerView={3}
          pagination={{ clickable: true }}
          navigation
          loop={true}
          modules={[Pagination, Navigation]}
          onSlideChange={() => console.log('slide change')}
          className="w-full"
          breakpoints={{
            0: {
              slidesPerView: 1, // 1 slide untuk layar kecil (mobile)
            },
            640: {
              slidesPerView: 2, // 2 slide untuk layar sedang (tablet)
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3, // 3 slide untuk layar besar (desktop)
              spaceBetween: 30,
            },
          }}
        >
          {['img-tentang.jpg', 'satu.jpeg', 'dua.jpeg', 'tiga.jpeg'].map(
            (image, index) => (
              <SwiperSlide key={index}>
                <Card
                  sx={{
                    maxWidth: 345,
                    height: '400px', // Atur height tetap
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                  }}
                >
                  <CardMedia
                    component="img"
                    alt={`Event ${index + 1}`}
                    height="140"
                    image={`/public/${image}`}
                  />
                  <CardContent sx={{ flex: 1 }}>
                    <Typography gutterBottom variant="h5" component="div">
                      Event {index + 1}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ color: 'text.secondary' }}
                    >
                      Ini adalah contoh event yang diadakan di BEMF UNUGHA,
                      dengan deskripsi yang menarik dan edukatif.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">Share</Button>
                    <Button size="small">Learn More</Button>
                  </CardActions>
                </Card>
              </SwiperSlide>
            )
          )}
        </Swiper>
      </div>
    </div>
  );
};

export default Event;
