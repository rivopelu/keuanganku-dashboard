import { MainCard } from "../components/MainCard.tsx";
import { PageContainerDashboard } from "../components/PageContainerDashboard.tsx";

export function HomePage() {
  return (
    <PageContainerDashboard>
      <div className={"grid grid-cols-2 gap-4"}>
        <MainCard>
          <h1>HOME</h1>
        </MainCard>
        <MainCard>
          <h1>HOME</h1>
        </MainCard>
      </div>
    </PageContainerDashboard>
  );
}
