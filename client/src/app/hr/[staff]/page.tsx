interface IProps {
  params: { staff: string };
}

const StaffPage = ({ params }: IProps) => {
  return (
    <div>
      <h1 className="title">His/Her name is: {params.staff}</h1>
    </div>
  );
};
export default StaffPage;
