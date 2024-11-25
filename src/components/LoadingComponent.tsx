interface LoadingComponentProps {
  isLoading: boolean;
}

export const LoadingComponent: React.FC<LoadingComponentProps>  = ({ isLoading })  => (
  isLoading ? <h2>Loading....</h2> : null
);
