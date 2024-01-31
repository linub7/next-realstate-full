import { usePathname, useRouter } from 'next/navigation';
import { Tag } from 'antd';

interface Props {
  searchParams: any;
}

const PropertiesFiltersTags = (props: Props) => {
  const router = useRouter();
  const pathname = usePathname();
  const handleRemoveSearchType = (key: string) => {
    const newSearchParams = { ...props?.searchParams };
    delete newSearchParams[key];

    const queryString = new URLSearchParams(newSearchParams).toString();
    router.push(`${pathname}?${queryString}`);
  };
  return (
    <div>
      {Object.keys(props?.searchParams).length === 0 ? (
        <span className="text-sm text-gray-600">No Filters applied</span>
      ) : (
        <div className="flex flex-wrap gap-5">
          {Object.keys(props?.searchParams).map((key, index) => (
            <div key={index} className="flex flex-col capitalize gap-1">
              <span className="text-gray-500 text-sm">{key}</span>
              <Tag
                onClose={() => handleRemoveSearchType(key)}
                closable
                className="flex items-center gap-1 border border-solid border-primary"
              >
                <span className="text-primary text-sm">
                  {props?.searchParams[key]}
                </span>
              </Tag>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default PropertiesFiltersTags;
