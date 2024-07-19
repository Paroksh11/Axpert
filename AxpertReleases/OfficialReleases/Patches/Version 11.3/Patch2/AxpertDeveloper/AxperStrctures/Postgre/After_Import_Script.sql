<<
update coretstructhdr set pattern=patternddl where pattern='patternddl';
>>


<<
update coretstructhdr set masking ='No Mask' where (masking is null or length(masking)<2);
>>


<<
update dwb_iviewmain set hideprojname ='F',hidereportdate ='F';
>>

