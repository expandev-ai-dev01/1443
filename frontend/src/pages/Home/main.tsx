import type { HomePageProps } from './types';

/**
 * @page HomePage
 * @summary Home page displaying welcome message and application overview
 * @domain core
 * @type landing-page
 * @category public
 */
export const HomePage = (props: HomePageProps) => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">TODO List</h1>
        <p className="text-xl text-gray-600 mb-8">Sistema de Gerenciamento de Tarefas</p>
        <div className="space-y-2 text-gray-500">
          <p>Organize suas tarefas de forma eficiente</p>
          <p>Defina prioridades e prazos</p>
          <p>Sincronize em múltiplos dispositivos</p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
