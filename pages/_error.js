import React from 'react';
import Layout from '../components/Layout';
import Link from 'next/link';
export default class Error extends React.Component {
  static getInitialProps({ res, err }) {
    const statusCode = res ? res.statusCode : err ? err.statusCode : null;
    return { statusCode };
  }

  render() {
    const { statusCode } = this.props;

    return (
      <Layout title='Oh no :('>
        {statusCode === 404 ? (
          <div className='message'>
            <h1>Esta pagina no existe</h1>
          </div>
        ) : (
          <div className='message'>
            <h1>Hubo un problema</h1>
            <p>Intenta mas tarde</p>
          </div>
        )}
        <p>
          <Link href='/'>
            <a>Volver al Home</a>
          </Link>
        </p>
      </Layout>
    );
  }
}
