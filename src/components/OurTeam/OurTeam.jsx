import { HoverEffect } from '../ui/HoverEffects';

const OurTeam = () => {
  const ourTeam = [
    {
      title: 'Departemen Hubungan Dalam Negri',
      description:
        '“bertugas menjalin kerjasama di tingkat prodi,mencitrakan BEM FMIKOM secara positif, mengelola pusat data pemerintahan mahasiswa, dan mengkomunikasikan aspirasi mahasiswa FMIKOM.”',
      link: '/struktur',
    },
    {
      title: 'Departemen Hubungan Luar Negri',
      description:
        '“bertugas menjalin kerjasama dengan pemangku kepentingan di dalam dan luar kampus, mencitrakan BEM FMIKOM secara positif, serta menciptakan jaringan informasi dan gerakan mahasiswa FMIKOM”',
      link: '/struktur',
    },
    {
      title: 'Departemen Teknologi',
      description:
        '“Bertugas mengelola seluruh struktur teknologi informasi dan komunikasi, mengkoordinasikan pengembangan, pemeliharaan, dan pengoprasian sistem informasi di lingkungan mahasiswa BEM FMIKOM”',
      link: '/struktur',
    },
    {
      title: 'Departemen Ekonomi Kreatif',
      description:
        '“Bertugas mencari dana untuk BEM FMIKOM, menjalin kerjasama profit, meningkatkan kewirausahaan, dan memfasilitasi wirausaha mahasiswa di FMIKOM”',
      link: '/struktur',
    },
    {
      title: 'Departemen PERS',
      description:
        '“Bertugas mengelola kekayaan digital FMIKOM, memfasilitasi minat jurnalistik mahasiswa, serta menginventaris dan mempublikasikan kegiatan BEM FMIKOM”',
      link: '/struktur',
    },
  ];
  return (
    <>
      <div className="md:px-20 px-6 ">
        <h1 className="text-4xl font-semibold text-zinc-900 text-center pt-8">
          Our Team
        </h1>
        <div>
          <HoverEffect items={ourTeam} />
        </div>
      </div>
    </>
  );
};

export default OurTeam;
