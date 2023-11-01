import NewTodoForm from '@/components/NewTodoForm';

const DashboardLayout = ({ children }: any) => {
  return (
    <div>
      <h1>Dashboard</h1>
      <div>
        <NewTodoForm />
      </div>
      {children}
    </div>
  );
};

export default DashboardLayout;
