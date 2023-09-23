/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers () {
    return [
      {
        source: '/(.*)', // Isso permite que todas as rotas tenham o cabeçalho personalizado
        headers: [
          {
            key: 'Access-Control-Allow-Origin',
            value: 'https://85.31.230.44:8000',
          },
        ],
      },
    ];
  },
}

module.exports = nextConfig
