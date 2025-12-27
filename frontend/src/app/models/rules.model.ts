export interface Condition {
  type: string;
  field: string;
  value: string;
}

export interface RulesDataResponse {
  success: boolean;
  data: {
    id: number;
    rule_code: string;
    rule_name: string;
    rule_category: string;
    condition_json: Condition;
    severity: string;
    message: string;
    active: boolean;
    created_by: string;
    created_at: string;
    updated_at: string;
  };
}
