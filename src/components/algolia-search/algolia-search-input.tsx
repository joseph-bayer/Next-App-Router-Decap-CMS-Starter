import algoliasearch from "algoliasearch/lite";
import {
  Highlight,
  Hits,
  PoweredBy,
  SearchBox,
  Snippet,
  useInstantSearch,
} from "react-instantsearch";
import { InstantSearchNext } from "react-instantsearch-nextjs";

const algoliaClient = algoliasearch(
  process.env.NEXT_PUBLIC_ALGOLIA_APPLICATION_ID as string,
  process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_API_KEY as string,
);

// Prevent empty request from firing
const searchClient = {
  ...algoliaClient,
  search(requests: any) {
    if (requests.every(({ params }: any) => !params.query)) {
      return Promise.resolve({
        results: requests.map(() => ({
          hits: [],
          nbHits: 0,
          nbPages: 0,
          page: 0,
          processingTimeMS: 0,
          hitsPerPage: 0,
          exhaustiveNbHits: false,
          query: "",
          params: "",
        })),
      });
    }

    return algoliaClient.search(requests);
  },
};

interface AlgoliaSearchInputProps {}

export default function AlgoliaSearchInput({}: AlgoliaSearchInputProps) {
  let timerId: any = undefined;
  let timeout: number = 200;

  return (
    <div className="algolia-search relative">
      <InstantSearchNext
        searchClient={searchClient as any}
        indexName="netlify_cfa28f96-0bda-46e9-b10a-3643d21a0e5d_master_all"
        future={{
          preserveSharedStateOnUnmount: true,
        }}
      >
        {/* Search Input */}
        <SearchBox
          classNames={{
            root: "mb-1",
            form: "pr-40 rounded-[3px]",
            input: "border-none shadow-none",
            reset: "right-32",
          }}
          queryHook={(query, search) => {
            if (timerId) {
              clearTimeout(timerId);
            }

            timerId = setTimeout(() => search(query), timeout);
          }}
        />

        {/* Results */}
        <EmptyQueryBoundary fallback={null}>
          <NoResultsBoundary fallback={<NoResults />}>
            <Hits
              hitComponent={Hit}
              classNames={{
                item: "hover:bg-gray-100 p-0",
              }}
            />
          </NoResultsBoundary>
        </EmptyQueryBoundary>
      </InstantSearchNext>

      {/* "Powered by Algolia" logo (needed for community tier) */}
      <PoweredBy
        classNames={{
          root: "absolute right-0 z-10 mr-4 top-[14px]",
          logo: "h-3",
        }}
      />
    </div>
  );
}

const Hit = ({ hit }: any) => (
  <a className="flex w-full flex-col gap-y-4 p-6" href={hit.url}>
    <Highlight hit={hit} attribute={"title"} />
    {hit.description && <Snippet hit={hit} attribute={"description"} />}
  </a>
);

function EmptyQueryBoundary({ children, fallback }: any) {
  const { indexUiState } = useInstantSearch();

  if (!indexUiState.query) {
    return (
      <>
        {fallback}
        <div hidden>{children}</div>
      </>
    );
  }

  return children;
}

function NoResultsBoundary({ children, fallback }: any) {
  const { results } = useInstantSearch();

  // The `__isArtificial` flag makes sure not to display the No Results message
  // when no hits have been returned.
  if (!results.__isArtificial && results.nbHits === 0) {
    return (
      <>
        {fallback}
        <div hidden>{children}</div>
      </>
    );
  }

  return children;
}

function NoResults() {
  const { indexUiState } = useInstantSearch();

  return (
    <p className="bg-white p-6 text-sm text-gray-500">
      No results for <q>{indexUiState.query}</q>.
    </p>
  );
}
