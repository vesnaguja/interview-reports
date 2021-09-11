import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import CandidateGrid from './CandidateGrid';

const HomePage = ({token}) => {
  return (
    <>
      <Header />
       <CandidateGrid token={token} />
      <Footer />
    </>
  )
}

export default HomePage;