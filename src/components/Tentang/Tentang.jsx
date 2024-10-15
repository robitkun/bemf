import { Box, Container, Grid, Typography, Avatar } from '@mui/material';
import { Link } from 'react-router-dom';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

function Tentang() {
  return (
    <Box sx={{ paddingY: 8, backgroundColor: '#f5f5f5' }}>
      <Container maxWidth="lg">
        <Typography
          variant="h4"
          gutterBottom
          textAlign="center"
          paddingBottom={4}
        >
          Tentang
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Box
              textAlign="center"
              sx={{ display: 'flex', justifyContent: 'center' }}
            >
              <Avatar
                alt="Our Team"
                src="/img-tentang.jpg"
                sx={{
                  width: '100%',
                  height: '100%',
                  maxWidth: '100%',
                  maxHeight: '100%',
                }}
                variant="rounded"
              />
            </Box>
          </Grid>

          <Grid item xs={12} md={6}>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'start',
              }}
            >
              <Typography variant="body1" color="textSecondary" paragraph>
                Badan Eksekutif Mahasiswa Fakultas Matematika dan Ilmu Komputer
                (BEM FMIKOM) merupakan organisasi kemahasiswaan tertinggi di
                tingkat fakultas Matematika dan Ilmu Komputer. BEM FMIKOM ini
                didirikan pada tanggal 2 November 2018. BEM FMIKOM berada di
                bawah naungan Universitas Nahdlatul Ulama Al Ghazali Cilacap.
                BEM FMIKOM bersifat demokratis, aspiratif, solutif, edukatif,
                dan Pergerakan.
              </Typography>

              <Typography variant="body1" color="textSecondary" paragraph>
                BEM FMIKOM hadir untuk menjembatani kebutuhan mahasiswa dalam
                meningkatkan kompetensi akademik dan non-akademik, sekaligus
                membangun karakter yang unggul dan adaptif terhadap perkembangan
                teknologi di era digital. Melalui program-program kerja yang
                variatif, BEM FMIKOM turut mendorong mahasiswa untuk tidak hanya
                menjadi insan akademis yang berprestasi, tetapi mencetak
                kader-kader pemimpin yang berintegritas tinggi.
              </Typography>
              <Link to="/tentang" className="px-6 py-4 ">
                Selengkapnya <ArrowRightAltIcon />
              </Link>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Tentang;
